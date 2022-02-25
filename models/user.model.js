const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    username: { type: 'String', required: true, unique: true },
    email: { type: 'String', required: true },
    password: { type: 'String', required: true },
    mobile: { type: 'Number', required: false },
}, {
    versionKey: false,
    timestamps: true
})

const model = mongoose.model("user", userSchema);
module.exports = model