const {db, Student} = require('./model');

async function task(){
    try{

        await db.sync();
    
        // you can provide clauses here .. see the docs for more explaination
        const students = await Student.findAll({
            where: {
                age: {
                    $gt: 10
                }
            },
            order: [
                ['name', 'ASC']
            ]
        });
        students.forEach(s => {
            console.log(`name: ${s.dataValues.name} \t\t age: ${s.dataValues.age}`);
        });

    }
    catch(e){
        console.error(e);
    }
}

task();