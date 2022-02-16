// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'haseeb123',
  password: 'haseeb123',
  database: 'testdb'
});

// simple query
connection.query(
    ` CREATE TABLE books (id INTEGER NOT NULL, name VARCHAR(50) NOT NULL)`,
    function(err, results, fields) {
      if(err) console.error(err);
      else
      {
            console.log("table created successfully");
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
      }
      connection.close();
    }
  );