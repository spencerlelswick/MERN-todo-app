const express = require('express')
const isLoggedIn = require('./middleware/isLoggedIn')
const readTodosRoute = require('./routes/readTodosRoute')
const createTodoRoute = require('./routes/createTodoRoute')
const updateTodoRoute = require('./routes/updateTodoRoute')
const deleteTodoRoute = require('./routes/deleteTodoRoute')

const router = express.Router()

router.post('/login', require('./routes/loginRoute'))

router.get('/todos', isLoggedIn, readTodosRoute)
router.post('/todos', isLoggedIn, createTodoRoute)
router.put('/todos/:id', isLoggedIn, updateTodoRoute)
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute)

module.exports = router
