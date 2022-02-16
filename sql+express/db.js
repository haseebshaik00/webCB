const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'person123',
  password: 'person123',
  database: 'persondb'
});

function getAllPersons (){
    return new Promise( (resolve, reject ) => {
        connection.query(`SELECT * FROM persons`,
        function(err, rows, cols){
            if(err) reject(err);
            else resolve(rows);
        })
    });
}

function addPerson(id, name){
    return new Promise((resolve, reject) => {
        // we write ?,? for sanitization of the data sent and hence preventing from sql injection
        connection.query(`INSERT INTO persons VALUES(?,?)`,[id, name],
        function(err, rows){
            if(err) reject(err);
            else resolve();
        })
    });
}

exports = module.exports = {
    getAllPersons, 
    addPerson
}