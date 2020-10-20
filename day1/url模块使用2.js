// 表示引入http模块
var http = require('http');
const url = require('url')
/*
    request:获取ur传过来的信息
    response:给浏览器响应信息
*/
http.createServer(function (request, response) {

  // 设置响应头
  // 状态码是200，文件类型是html，字符集是utf-8
  response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});// 解决乱码
  response.write("<head><meta charset='UTF-8'></head>");// 解决乱码
 
  console.log(request.url);
  if(request.url != '/favicon.ico'){
      var userinfo = url.parse(request.url,true).query;
      console.log(userinfo.name);
      console.log(userinfo.age);
      console.log('laksdjflaksjf')
  }

  response.end();
}).listen(3000);
