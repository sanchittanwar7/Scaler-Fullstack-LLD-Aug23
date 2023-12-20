const mongoose = require('mongoose')


const DB = 'mongodb+srv://sanchittanwar1:Z9o7rUAQs79vWMp5@cluster0.bzn1zyg.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Server connected')
}).catch(err => {
    console.log('Error connecting to DB: ', err)
})