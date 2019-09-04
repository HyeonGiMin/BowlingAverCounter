var express = require('express');
var router = express.Router();
var mysql=require('mysql');
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");
let passObj=require("../config/password");
const { User } = require('../models');
const {GameLists} =require('../models');
const crypto=require('crypto');
var indexRouter=require('./users');

const client=mysql.createConnection({
  host:'http://hyeoni1995.synology.me',
  port:3307,
  user:'bowlAM',
  password:'Aquea6725!',
  database:"bowl"
})

router.use('/user/test', indexRouter);

/* GET home page. */
router.get('/', function(req, res, next) {

  let token = jwt.sign({
        email: "foo@example.com"   // 토큰의 내용(payload)
      },
      secretObj.secret ,    // 비밀 키
      {
        expiresIn: '5m'    // 유효 시간은 5분
      })

    /*
        User.findAll().then((memo)=>{

            console.log(memo[0].email)


          //     res.json(memo);
            })



      client.query('select devID,manu,nickname from device_info(error,result)=>{
        if(error){
          res.render('error')
        }else if(!result.length){
          res.render('mainPage',{data:result,name:name})
        }
        else{res.render('mainPage',{data:result,name:name})
        }
      })
      */
    var password="123456"

    var cipher=crypto.createCipher(passObj.Cipher,passObj.secret);
    cipher.update(password,'utf8',passObj.Decipher)
    var cipheredOutput=cipher.final("base64");

    User.create({
        name: "민현기",
        email:"test@test.com",
        score:"100",
        average:"100",
        password: cipheredOutput
    });

  res.cookie('user',token,{
      maxAge: 30000   // 30000밀리초 → 30초
  });
 res.render('index', { title: 'Express' });
});

router.get('/text',function(req,res){

    User.findAll({
        where: {
            name: "민현기"
        }
    }). then((data)=>{
        var decipher=crypto.createDecipher(passObj.Cipher,passObj.secret)
        decipher.update(data[0].password,passObj.Decipher,'utf8')
        var deciperedOutput=decipher.final('utf8')
        console.log(deciperedOutput)

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
    });





})

router.post('/login',(req,res)=>{
    var body=req.body;
    var email=body.email
    var passwd=body.pwd;
    console.log(body)
    console.log(email)
    console.log(passwd)


    User.findAll({
        where: {
            id: email
        }
    }).then((data)=>{

        var cipher=crypto.createCipher(passObj.Cipher,passObj.secret);
        cipher.update(   data[0].password,'utf8',passObj.Decipher)
        var cipheredOutput=cipher.final(passObj.Decipher);

        console.log(cipheredOutput)
        if(passwd==cipheredOutput){
            res.json({
                "result_code":200
            })
        }else{
            res.json({
                "result_code":500
            })
        }

    })

})

router.get('/login',(req,res)=>{
    res.render('login');
})


module.exports = router;
