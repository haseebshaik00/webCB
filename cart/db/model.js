const {Sequelize, db} = require('./connection');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
});

db.sync()
    .then(() => console.log("Database Created!"))
    .catch((e) => console.error(e));

module.exports = {
    User, Product
}