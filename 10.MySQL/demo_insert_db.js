var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO people (name, address) VALUES ('LBM', 'SmilePlus604')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});