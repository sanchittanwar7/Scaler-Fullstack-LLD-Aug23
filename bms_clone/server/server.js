const express = require('express')
require('dotenv').config()

const app = express()
const dbConfig = require('./config/dbConfig')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use('/api/users', userRoutes.router)

app.listen(8080, () => {
    console.log("Server has started")
})