var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});