var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // var myobj = { name: "Company Inc", address: "Highway 37" };
  var myobj = [
    { "_id": 1, "product_id": 154, "status": 1, "orderdetails": [
      { "_id": 154, "name": "Chocolate Heaven" } ]
    }
  ];
  // dbo.collection("customers").insertOne(myobj, function(err, res) {
    dbo.collection("orders").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});