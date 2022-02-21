const {db} = require('./connect'),
      {DataTypes} = require('sequelize');

// WDPP18S1 : Web Dev, Pritampura, 2018, Season, Batch Number

const Course = db.define('course', {
    id:{
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: DataTypes.STRING(10)
});

const Teacher = db.define('teacher', {
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

const Center = db.define('center', {
    id:{
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

const Season = db.define('season', {
    id:{
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

const Batch = db.define('batch', {
    code: {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    year: DataTypes.INTEGER(2),
    start: DataTypes.DATE,
    end: DataTypes.DATE
});


// Assocaitions

Batch.belongsTo(Course);
Batch.belongsTo(Center);
Batch.belongsTo(Season);

Course.hasMany(Batch);
Center.hasMany(Batch);
Season.hasMany(Batch);

db.sync({alter: true});


module.exports = {
    db, Course, Center, Teacher, Season, Batch
}
