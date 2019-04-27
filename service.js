/**
 * 功能实现
 */
const path=require('path');
const fs=require('fs');
const db=require('./db.js');
//图书编号生成
let maxBookId=()=>{
	let arr=[];
	data.forEach((item)=>{//遍历数组
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}

//查询
let show=(req,res)=>{
	let sql='select * from book';
 	db.base(sql,null,(result)=>{
 		res.render('index',{list : result});
 	});
 }
exports.login=(req,res)=>{
	let info=req.body;
	let sql='select count(*) as total from user where username=? and password=?';
	let data=[info.username,info.password];
	db.base(sql,data,(result)=>{
		if (result[0].total==1) {
			show(req,res);
		}else{
			res.send('登陆失败');
		}
	});
}
exports.toLogin=(req,res)=>{
	res.render('checkLogin',{});	
}

 //添加图书页面
 exports.toAddBook=(req,res)=>{
 	res.render('addBook',{});
 }
 //添加图书保存数据
 exports.addBook=(req,res)=>{
 	let info=req.body;//获取表单数据
 	let book={};
 	for(let key in info){
 		book[key]=info[key];
 	}
 	let sql='insert into book set ?';
 	db.base(sql,book,(result)=>{
 		if(result.affectedRows==1){
 			show(req,res);
 			//res.redirect('/');
 		}
 	});
 }
 //跳转到修改页面
 exports.toEditBook=(req,res)=>{
 	let id=req.query.id;
 	let sql='select * from book where id=?';
 	let data=[id];
 	db.base(sql,data,(result)=>{
 		res.render('editBook',result[0]);
 	});
 }
  //更新修改后页面
 exports.editBook=(req,res)=>{
 	let info=req.body;
 	let sql='update book set name=?,author=?, category=? where id=?';
 	let data=[info.name,info.author,info.category,info.id];
 	db.base(sql,data,(result)=>{
 		if(result.affectedRows==1){
 			show(req,res);
 			//res.redirect('/');
 		}
 	});
 }
 exports.delBook=(req,res)=>{
 	let id=req.query.id;
 	let sql='delete from book where id=?';
 	let data=[id];
 	db.base(sql,data,(result)=>{
 		if(result.affectedRows==1){
 			show(req,res);
 			//res.redirect('/');
 		}
 	});
 }
  exports.toExit=(req,res)=>{
 	res.redirect('/');
 }