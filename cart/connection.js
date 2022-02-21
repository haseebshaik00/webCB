const Sequelize = require('sequelize');

const db = new Sequelize('cartDB', 'cartuser', 'cartuser123', {
    host: 'localhost',
    dialect: 'mysql'
  });


db.authenticate()
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

module.exports = {
  db
}