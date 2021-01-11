// 创建web服务器模块
const http = require('http');
// 引入模板引擎
const template = require('art-template');
//引入path模块
const path = require('path');
// 引入querystring模块
const querystring = require('querystring');

// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 引入处理日期的第三方模块
const dateformat = require('dateformat');
const router = require('./route/index')




// 实现静态资源访问目录
const serve = serveStatic(path.join(__dirname,'public'))

// 配置模板的根目录
template.defaults.root = path.join(__dirname,'views');
// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat;



//因为connect没有导出任何模块成员，所以不需要用变量接收
//把数据库模块导入进来
require('./model/connect');



// 创建web服务器,app就是网站服务器对象
const app = http.createServer();
// 当客户端发送请求的时候
app.on('request',(req,res) => {
    // 调用router方法-把请求对象和响应对象传入
    // 会通过请求对象req进行判断，当前的请求地址和请求方式，判断后在去调用上面的router.get（）方法
    router(req,res,() => {})
    // 启用静态资源访问服务功能
    serve(req,res,() => {})
});
// 监听3000端口
app.listen(80);
console.log('服务已经启动，监听80端口，请范围localhost:80');