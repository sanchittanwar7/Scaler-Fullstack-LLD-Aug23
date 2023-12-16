const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    console.log('On route /')
    res.send("Response from get")
})

app.post('/', (req, res) => {
    res.send("Response from post")
})

app.delete('/', (req, res) => {
    res.send("Response from delete")
})


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})