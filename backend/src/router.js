// Criei esse arquivo router para todas as requisições ficarem organizadas em um arquivo só

const express = require('express')
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router()

router.get('/tasks', tasksController.getAll)

router.post('/tasks', 
    tasksMiddleware.validateFildTitle, 
    tasksMiddleware.validateFieldStatus,
    tasksController.createTask)

router.delete('/tasks/:id', tasksController.deleteTask)

router.put('/tasks/:id', 
    tasksMiddleware.validateFildTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask)

module.exports = router