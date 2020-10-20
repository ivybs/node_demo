// 表示引入http模块
var http = require('http');
/*
    request:获取ur传过来的信息
    response:给浏览器响应信息
*/
http.createServer(function (request, response) {

  console.log(request.url);  
  // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});// 解决乱码
  response.write("<head><meta charset='UTF-8'></head>");// 解决乱码
  response.write('你好');
  response.write('<h2>你好nodejs </h2>');
  // 表示给我们页面上输出一句话并且结束响应
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');