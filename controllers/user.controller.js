const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router();
const User = require('../models/user.model')

const JWT_SECRET_KEY = "dsjhakjshdfhugchv$$#$%#sbavnb"

router.post('/api/register', async (req, res) => {
    const { name, username, email, password: plaintextpassword, mobile } = req.body

    if (plaintextpassword.length < 6) {
        return res.status(400).json({ status: "error", error: "password too small" })
    }

    const password = await bcrypt.hash(plaintextpassword, 10)
    try {
        const user = User.create({
            name, username, email, password, mobile
        })
        return res.status(200).send({ user, status: 'ok' })
    } catch (error) {
        return res.json({ status: "error" })
    }
})

router.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username }).lean().exec();
        if (!user) {
            return res.status(400).json({ status: 'error', error: "Invalid username or password" })
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                id: user._id,
                username: user.username
            },
                JWT_SECRET_KEY
            )
            return res.json({ status: 'ok', data: token })

        }
    }
    catch (error) {
        return res.json({ status: 'error', error: "Invalid username or password" })

    }


})


module.exports = router