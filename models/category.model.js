const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    catName: { type: 'String', required: true },
    product_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true
})

const model = mongoose.model("category", catSchema);
module.exports = model