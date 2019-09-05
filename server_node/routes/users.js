var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

/* GET users listing. */
router.get('/', function(req, res, next) {


});

module.exports = router;