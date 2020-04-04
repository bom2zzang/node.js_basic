var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bom2",
  password: "1111",
  database: "study_node"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/*
    - LEFTJOIN
    SELECT  users.name AS user,
            products.name AS favorite
    FROM users
    LEFT JOIN products ON users.favorite_product = products.id

    - RIGHTJOIN
    SELECT  users.name AS user,
            products.name AS favorite
    FROM users
    RIGHT JOIN products ON users.favorite_product = products.id 



*/