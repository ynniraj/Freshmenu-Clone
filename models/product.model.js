const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    strMeal: { type: 'String', required: true },
    strMealThumb: { type: 'String', required: true },
    idMeal: { type: 'Number', required: true },
    price: { type: 'Number', required: true },

}, {
    versionKey: false,
    timestamps: true
})

const model = mongoose.model("product", productSchema);
module.exports = model