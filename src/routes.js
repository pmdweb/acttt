const express = require('express')
const languages = require('./controllers/languages')
const api = require('./api')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ "STATUS DO SERVIDOR": "ONLINE"})
})

routes.get('/api',api.index)
routes.get('/languages',languages.index)
routes.get('/languages/:id',languages.indexTarget)
routes.post('/locate/',languages.detectLanguage)
routes.post('/translate/',languages.translateText)

module.exports = routes