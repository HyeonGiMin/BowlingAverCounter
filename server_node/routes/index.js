var express = require('express');
var router = express.Router();
var mysql=require('mysql');
let secretObj = require("../config/jwt");


const client=mysql.createConnection({
  host:'http://hyeoni1995.synology.me',
  port:3307,
  user:'bowlAM',
  password:'Aquea6725!',
  database:"bowl"
})

/* GET home page. */
router.get('/', function(req, res, next) {

  let token = jwt.sign({
        email: "foo@example.com"   // 토큰의 내용(payload)
      },
      secretObj.secret ,    // 비밀 키
      {
        expiresIn: '5m'    // 유효 시간은 5분
      })
  res.cookie("user", token);
  /*client.query('select devID,manu,nickname from device_info(error,result)=>{
    if(error){
      res.render('error')
    }else if(!result.length){
      res.render('mainPage',{data:result,name:name})
    }
    else{res.render('mainPage',{data:result,name:name})
    }
  })
  */

  res.render('index', { title: 'Express' });
});

module.exports = router;
