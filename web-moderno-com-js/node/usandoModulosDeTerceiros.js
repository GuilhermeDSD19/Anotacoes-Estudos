const lodash = require('lodash')
const http = require('http')

http.createServer((req, res) => {
    setInterval(() => {
        res.write(`${lodash.random(1, 30)} `)
        res.end()
    }, 1000)
}).listen(8080)