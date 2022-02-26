require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://freshmenu-heroku.herokuapp.com/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile?.email }).lean().exec();

      if (!user) {
        user = await User.create({
          email: profile?.email,
          password: uuidv4(),
          name: profile?.displayName,
          username: profile?.given_name

        });
      }
      // console.log(request, accessToken, refreshToken, profile)
      // console.log(user)

      return done(null, user);
    }
  )
);

module.exports = passport;
