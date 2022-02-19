const {db, Student} = require('./model');

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

task();