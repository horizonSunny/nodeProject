var http = require('http')
var config = require('./config')
http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html:charset=UTF-8' })
    response.end('hahaha')
    console.log(config.str)
  })
  .listen(8888)
