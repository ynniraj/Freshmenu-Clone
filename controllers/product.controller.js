const express = require('express');
const Product = require('../models/product.model')
const router = express.Router();



router.post("", async (req, res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(200).send(product);

    } catch (err) {
        return res.status(500).send(err)
    }
})
router.get("", async (req, res) => {
    try {
        const product = await Product.find().lean().exec()
        return res.status(200).send(product);

    } catch (err) {
        return res.status(500).send(err)
    }
})


router.get("/:idMeal", async (req, res) => {
    try {
        const product = await Product.find({ idMeal: req.params.idMeal }).lean().exec()
        return res.status(200).send(product);
    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router