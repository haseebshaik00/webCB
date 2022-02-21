const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'person123',
  password: 'person123',
  database: 'persondb'
});