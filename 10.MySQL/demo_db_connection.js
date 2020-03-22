var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

