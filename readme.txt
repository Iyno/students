
3.1 案例介绍--学生档案管理
目标：模板引擎应用，强化node.js项目制作流程
知识点：http 请求响应、数据库、模板引擎、静态资源访问
3.2制作流程
1、建立项目文件夹并生成项目描述文件
2、创建网站服务器实现客户端和服务器端通信
3、连接数据库并根据需求设计学员信息表
4、创建路由并实现页面模板呈递
5、实现静态资源访问
6、实现学生信息添加功能
7、实现学生信息展示功能

3.3第三方模块router
功能：实现路由
使用步骤：
1、获取路由对象
2、调用路由对象提供的方法创建路由
3、启用路由，使路由生效
const getRouter = require('router')
const router = getRouter();
router.get('./add',(req,res) => {
    res.end('hello world!')
})
server.on('request',(req,res) => {
    router(req,res)
})

3.4第三方模块serve-static
功能：实现静态资源访问服务
步骤：
1、引入server-static模块获取创建静态资源服务功能的方法
2、调用方法创建静态资源服务并指定静态资源服务目录
3、启用静态资源服务功能
示例代码：
const serverStatic = require('server-static)
const serve =serverStatic('public')
server.on('require',() => {
    server(req,res)
})
server.listen(3000)

3.5添加学生信息功能步骤分析
1、在模板的表单中指定请求地址与请求方式-.art文件里面
2、为每一个表单项添加name属性
3、添加实现学生信息功能路由
4、接收客户端传递过来的学生信息
5、将学生信息添加到数据库中
6、将页面重定向到学生信息列表页面


3.6学生信息列表页面分析
1、从数据库中将所有的学生信息查询出来
2、通过模板引擎将学生信息和HTML模板进行拼接
3、将拼接好的HTML模板响应给客户端

去终端运行该命令就能起来数据库
docker run  --name mongo-on-docker -p 27888:27017 mongo