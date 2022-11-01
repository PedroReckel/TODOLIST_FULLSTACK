const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(router)  // Toda requisição que for feita na minha aplicação irá cair dentro do router onde estão as rotas 

module.exports = app