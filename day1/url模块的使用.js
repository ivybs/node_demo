const url = require('url')
var api = 'http://www.baidu.com'
//console.log(url.parse(api));
/**
 * 
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://www.baidu.com/'
}
 * 
 */
var getValue = url.parse(api,true).href;
console.log(getValue)






