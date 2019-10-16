var http = require('http')
var url = require('url')
http
  .createServer(function(req, res) {
    // 第一个参数是地址，第二个参数表示把get传值转换成对象
    var result = url.parse(req.url, true)
    console.log('query', result.query)
    res.writeHead(200, { 'Content-Type': 'text/html:charset=UTF-8' })
    res.end('hahaha')
  })
  .listen(8888)
