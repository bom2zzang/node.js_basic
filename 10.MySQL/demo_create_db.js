var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE study_node", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});