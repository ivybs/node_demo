var obj = {
    get:function(){
        console.log('从服务器获取数据')
    },
    post:function(){
        console.log('提交数据')
    }
}
// 如果只暴露这个模块中的个别方法，就用这种写法
// exports.xxxx = obj; //{ xxxx: { get: [Function: get], post: [Function: post] } }
// 如果把所有方法都封装到了一个对象里面，如果要把这个模块里面的所有东西都暴露出来，就用这种写法
// module.exports = obj; //{ get: [Function: get], post: [Function: post] }


exports.get = function(){
    console.log('从服务器中获取数据')
}
exports.post = function(){
    console.log('提交数据')
}