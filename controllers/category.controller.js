const express = require('express');
const cata = require('../models/category.model')
const router = express.Router();



router.post("", async (req, res) => {
    try {
        const catas = await cata.create(req.body)
        return res.status(200).send(catas);

    } catch (err) {
        return res.status(500).send(err)
    }
})
router.get("/:name", async (req, res) => {
    try {
        const catas = await cata.find({ catName: req.params.name }).populate({ path: "product_id", select: ["strMeal", "strMealThumb", "idMeal", "price"] }).lean().exec()
        return res.status(200).send(catas);
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.get("", async (req, res) => {
    try {
        const product = await cata.find().populate({ path: "product_id", select: ["strMeal", "strMealThumb", "idMeal", "price"] }).lean().exec()
        return res.status(200).send(product);

    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router