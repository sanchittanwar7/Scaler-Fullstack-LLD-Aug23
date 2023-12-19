const express = require('express')
const fs = require("fs")

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

const app = express()

app.use(express.json())

// GET endpoint
app.get('/products', (req, res) => {
    res.send(data)
})

app.get('/products/:pid', (req, res) => {
    const { pid } = req.params
    const product = data.products.filter(p => pid == p.id)
    res.send(product[0])
})

// POST endpoint
app.post('/products', (req, res) => {
    const product = req.body
    data.products.push(product)
    fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')
    res.status(200).json(product)
})

app.listen(8080, () => {
    console.log("Server has started")
})

