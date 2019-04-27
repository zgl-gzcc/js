//加载数据库驱动
const mysql  = require('mysql');
exports.base=(sql,data,callback)=>{
	//创建数据库连接
	const connection = mysql.createConnection({
	  host     : 'localhost',//数据库所在服务器IP
	  user     : 'root',//登录数据库账号
	  password : '',//登陆数据库密码
	  database : 'book'//数据库表名
	});
	//执行连接操作
	connection.connect();
	//操作数据库(异步采取回调函数)
	connection.query(sql,data,function (error, results, fields) {
	  if (error) throw error;
	  callback(results);
	});
	//关闭数据库
	connection.end();
}