// Criei esse arquivo router para todas as requisições ficarem organizadas em um arquivo só

const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

router.get('/tasks', tasksController.getAll)

module.exports = router