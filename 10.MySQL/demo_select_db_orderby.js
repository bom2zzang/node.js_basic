var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});

con.connect(function(err) {
  if (err) throw err;
  //ASC
  //con.query("SELECT * FROM people ORDER BY name", function (err, result) {
      
  //DESC
  con.query("SELECT * FROM people ORDER BY name DESC", function (err, result) {

    if (err) throw err;
    console.log(result);
  });
});