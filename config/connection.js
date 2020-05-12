var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.db_user || "root",
  password: process.env.db_password || "password",
  database: process.env.db_name || "burgers_db",
  
});



connection.connect(function (err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connection as id " + connection.threadId);
});

module.exports = connection;