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

// DELETE endpoint
app.delete('/products/:pid', (req, res) => {
    const { pid } = req.params
    const productIndex = data.products.findIndex(p => p.id == pid)
    const product = data.products[productIndex]
    data.products.splice(productIndex, 1)
    fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')
    res.status(200).json(product)
})

// PUT endpoint
app.put('/products', (req, res) => {
    const product = req.body
    const productIndex = data.products.findIndex(p => p.id == product.id)
    console.log(productIndex)
    if (productIndex === undefined) {
        // product is not there in database
        // insert the product
        data.products.push(product)
    } else {
        // data.products.splice(productIndex, 1, {...product})
        data.products[productIndex] = product
    }
    fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')
    res.status(200).json(product)
})

// PATCH endpoint
app.patch('/products', (req, res) => {
    const product = req.body
    const productIndex = data.products.findIndex(p => p.id == product.id)
    const originalProduct = data.products[productIndex]
    // picking properties from existing product, and overriding it with new ones from req body
    const updatedProduct = {...originalProduct, ...product}
    data.products[productIndex] = updatedProduct
    fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')
    res.status(200).json(updatedProduct)
})

app.listen(8080, () => {
    console.log("Server has started")
})

