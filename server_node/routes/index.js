var express = require('express');
var router = express.Router();
var mysql=require('mysql');

const client=mysql.createConnection({
  host:'http://hyeoni1995.synology.me',
  port:3307,
  user:'bowlAM',
  password:'Aquea6725!',
  database:"bowl"
})

/* GET home page. */
router.get('/', function(req, res, next) {
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
