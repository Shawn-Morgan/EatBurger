// From catsapp example
// Set up MySQL connection.
var mysql = require("mysql");

var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//   } else{
//     connection = mysql.createConnection({
//       host: "localhost",
//       port: 3306,
//       user: "root",
//       password: "RemakeMyself2020&",
//       database: "burger_db"
//   })
// }

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else{
    connection = mysql.createConnection({
      host: "sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "y6wwtqv1177x5r9a",
      password: "e4yuzp09ex3o7rjw",
      database: "burger_db"
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
