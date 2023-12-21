const express = require('express')
const productRoutes = require('./routes/productsRoutes')

const app = express()

app.use(express.json())

app.use('/', productRoutes.router)
// app.use('/products', productRoutes.router)

app.listen(8080, () => {
    console.log("Server has started")
})
