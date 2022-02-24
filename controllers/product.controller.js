const express = require('express');
const Product = require('../models/product.model')
const router = express.Router();


router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product);
    } catch (err) {
        return res.status(500).send(err)
    }
})


router.get("/meal/:strMeal", async (req, res) => {
    try {
        const product = await Product.find({ strMeal: req.params.strMeal }).lean().exec()
        return res.status(200).send(product);
    } catch (err) {
        return res.status(500).send(err)
    }
})



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




module.exports = router