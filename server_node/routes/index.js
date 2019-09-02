var express = require('express');
var router = express.Router();
var mysql=require('mysql');
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");
const {Person} =require('../models');

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


    Person.findAll().then((memo)=>{

        console.log(memo[0].email)


      //     res.json(memo);
        })



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
  res.cookie('user',token,{
      maxAge: 30000   // 30000밀리초 → 30초
  });
 res.render('index', { title: 'Express' });
});

router.get('/text',function(req,res){
    console.log("text'");
    let token2 = req.cookies.user
console.log(token2)
    console.log(secretObj.secret)
    let decoded = jwt.verify(token2, secretObj.secret);
    console.log(decoded)
    if(decoded){
        res.send("권한이 있어서 API 수행 가능")
    }
    else{
        res.send("권한이 없습니다.")
    }

})
module.exports = router;
