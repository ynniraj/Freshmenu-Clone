const express = require('express');
const connect = require('./confiq/db')
const app = express();
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json());

const userController = require('./controllers/user.controller')
const productController = require('./controllers/product.controller')
const cataController = require('./controllers/category.controller')

app.use("", userController)
app.use("/products", productController)
app.use("/category", cataController)


app.listen(8888, async () => {
    await connect();
    console.log("listen on port 8888")
})