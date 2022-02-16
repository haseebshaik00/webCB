const mysql = require('mysql2');

const insert = {
    id: parseInt(process.argv[2]),
    name:  process.argv[3]
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'haseeb123',
  password: 'haseeb123',
  database: 'testdb'
});

// present in node script, we can fetch arguments data from process.argv array - this file contains data sent to this file
// 0 is node, 1 is name of the file
// you can access the object's values using ${} sign and the strings should be in '' 
connection.query(`INSERT INTO books (id, name) VALUES (${insert.id},'${insert.name}')`, function(err, results){
    if(err) console.error(err);
    else
    {
        console.log("data inserted successfully");
        console.log(results);
    }
      connection.close();
});