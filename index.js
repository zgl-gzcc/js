/** 图书管理系统*/
const express=require('express');
const path=require('path');
const template=require('art-template');
const bodyParser=require('body-parser');
const router=require('./router.js');
const app=express();

//启动静态资源服务
app.use('/www',express.static('css'));
//设置模板引擎
app.set('views',path.join(__dirname,'views'));
//设置模板引擎
app.set('view engine','art');
//使用express兼容art-template模板引擎
app.engine('art',require('express-art-template'));
//处理请求参数
//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended:false}));
//处理json格式参数
app.use(bodyParser.json());
//启动服务器
app.use(router);//配置路由
app.listen(3000,()=>{//监听端口
    console.log('run');
})