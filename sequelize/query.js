const {db, Student} = require('./model');

async function task(){
    try{

        await db.sync();
    
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