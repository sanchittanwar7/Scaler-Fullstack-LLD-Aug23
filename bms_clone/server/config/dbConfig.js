const mongoose = require('mongoose')

const mongoURL = process.env.mongo_url

mongoose.connect(mongoURL)

const connection = mongoose.connection

connection.on('connect', () => {
    console.log('DB connected')
})
