var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE people";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});