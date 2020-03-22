var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});
/*
con.connect(function(err) {
  if (err) throw err;
  //1
  //con.query("SELECT * FROM people WHERE address like concat('s','%')", function (err, result) {
  
  //2
  con.query("SELECT * FROM people WHERE address LIKE 'S%'", function (err, result) {

    if (err) throw err;
    console.log(result);
  });
});
*/
var adr = 'Mountain 21';
var sql = 'SELECT * FROM people WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
    if (err) throw err;
  console.log('Escape query values by using the mysql.escape() method:');
  console.log(result);
});

var adr = 'Mountain 21';
var sql = 'SELECT * FROM people WHERE address = ?';
con.query(sql, [adr], function (err, result) {
    if (err) throw err;
  console.log('Escape query values by using the placeholder ? method:');
  console.log(result);
});

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM people WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
  console.log('Multiple placeholders:');
  console.log(result);
});