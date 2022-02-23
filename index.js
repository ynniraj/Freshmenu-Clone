const express = require('express');
const connect = require('./confiq/db')
const app = express();
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json());

const userController = require('./controllers/user.controller')

app.use("", userController)


app.listen(8888, async () => {
    await connect();
    console.log("listen on port 8888")
})