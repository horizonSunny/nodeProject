var http = require('http')
http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html:charset=UTF-8' })
    response.end('hahaha')
  })
  .listen(8888)
