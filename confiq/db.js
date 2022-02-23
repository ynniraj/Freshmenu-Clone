const mongoose = require('mongoose');
module.exports = () => {
    return mongoose.connect("mongodb+srv://neeraj:neeraj_123@cluster0.lbyiw.mongodb.net/freshmenu")
}
