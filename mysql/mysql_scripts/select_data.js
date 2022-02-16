const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'haseeb123',
  password: 'haseeb123',
  database: 'testdb'
});

connection.query(`SELECT * FROM books`, function(err, rows, cols){
    if(err) console.error(err);
    else
    {
        console.log("data selected successfully");
        console.log(rows);
        console.log(cols);
    }
      connection.close();
});