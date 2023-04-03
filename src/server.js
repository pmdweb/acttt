const express = require('express')
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log('Received request: ', req.method, req.url)
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(cors({
    origin: '*'
}))

app.use(routes)
app.listen(666)