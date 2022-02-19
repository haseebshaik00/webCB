const Sequelize = require('sequelize'),
      DataTypes = Sequelize.DataTypes;

const db = new Sequelize('sequelizeDB', 'sql123', 'sql123', {
    host: 'localhost',
    dialect: 'mysql'
  });


const Student = db.define('student', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1 
    }
});

async function task(){
    try{

        await db.sync({alter: true})
        .then(() => console.log("Database Synchronized"))
        .catch((err) => console.log(err));
    
        // Insert a Student
        await Student.create({
            name: "Tom Hardy",
            age: 40
        })
    }
    catch(e){

    }
}