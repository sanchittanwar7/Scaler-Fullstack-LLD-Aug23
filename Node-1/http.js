const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    console.log('Server is running')
    // res.setHeader('Content-Type', 'text/html')
    // res.end('<h1>Response from server after changes</h1>')
    res.setHeader('Content-Type', 'application/json')
    // res.setHeader('Content-Length', '50')
    const obj = {"name": "Sanchit"}
    res.end(JSON.stringify(obj))
})

const port = 8080

server.listen(port, () => {
    console.log('Server is now running')
})