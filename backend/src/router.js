// Criei esse arquivo router para todas as requisições ficarem organizadas em um arquivo só

const express = require('express')

const router = express.Router()

router.get('/tasks', (req, res) => res.status(200).send('O router está funcionando'))

module.exports = router