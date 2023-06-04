const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const mongoose = require('mongoose')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(router)

const PORT = process.env.PORT || 3801

// TODO: config app here

app.get('/todos', (req, res) => {
  res.send('test2')
})

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log(`Server is now listening on port ${PORT}`)
  app.listen(PORT)
})
