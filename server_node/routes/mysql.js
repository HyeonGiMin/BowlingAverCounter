var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',    // 호스트 주소
    user     : 'me',           // mysql user
    password : 'secret',       // mysql password
    database : 'my_db'         // mysql 데이터베이스
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution',
    function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
connection.end();