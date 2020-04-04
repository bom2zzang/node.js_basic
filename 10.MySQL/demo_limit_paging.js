var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});

con.connect(function(err) {
  if (err) throw err;
  //var sql = "SELECT * FROM people Limit 5, 2";
  var sql = "SELECT * FROM people Limit 5 OFFSET 3";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});