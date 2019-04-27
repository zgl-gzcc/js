/**
 * 路由
 */
const express=require('express');
const router=express.Router();
const service=require('./service.js');
//路由处理
//渲染主页(显示主页)
router.get('/',service.toLogin);
router.post('/checkLogin',service.login);
//router.get('/',service.showIndex);
//添加图书(页面跳转)
router.get('/toAddBook',service.toAddBook);
//添加图书的表单
router.post('/addBook',service.addBook);
//跳转到修改图书页面
router.get('/toEditBook',service.toEditBook);
//修改提交表单
router.post('/editBook',service.editBook);
//删除
router.get('/delBook',service.delBook);
//注销
router.get('/toExit',service.toExit);

module.exports=router;