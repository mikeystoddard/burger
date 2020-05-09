var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "password",
  database: "burger_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connection as id " + connection.threadId);
});

module.exports = connection;