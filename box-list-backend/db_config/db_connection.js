var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'task'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Mysql DB Connection successful!");
});

module.exports = db