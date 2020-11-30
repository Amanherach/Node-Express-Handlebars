//  Set up MySQL connection.
var mysql = require("mysql");

// Connect to MySQL and make sure to change your PW
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Chloerose1!",
    database: "burgers_db"
   });  
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;