const express = require('express')

const app = express()

const PORT = 8080

const loggingMiddleware = (req, res, next) => {
    console.log("This is logging middleware")

    next()
}

const authMiddleware = (req, res, next) => {
    const { password } = req.query

    if (password == 123) {
        next()
    } else {
        res.sendStatus(401)
    }
}

app.use(loggingMiddleware)
// app.use(authMiddleware)

const staticMiddleware = express.static('public')
app.use(staticMiddleware)

app.get('/users/:userId', authMiddleware, (req, res) => {
    const param = req.params
    const query = req.query
    console.log(query)
    res.send(`Response for ${param.userId} and ${query.id}`)
})

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