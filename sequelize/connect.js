const Sequelize = require('sequelize');

const db = new Sequelize('sequelizeDB', 'sql123', 'sql123', {
    host: 'localhost',
    dialect: 'mysql'
  });


db.authenticate()
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));