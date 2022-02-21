const {db, Center, Season, Batch, Course, Teacher} = require('./model.js');


async function seed(){
    try{
        await db.sync({alter: true});
        
        await Center.bulkCreate([
            {id: 'HD', name: 'Hyderabad', city: 'Telangana'},
            {id:'PN', name: 'Pune', city: 'Mumbai'},
            {id:'DL', name: 'New Delhi', city: 'Delhi'}
        ],
        {
            ignoreDuplicate: true
        })

        await Season.bulkCreate([
            {id: 'S', name: 'Summer'},
            {id:'W', name: 'Winter'},
            {id:'F', name: 'Fall'}
        ],
        {
            ignoreDuplicate: true
        })

        await Course.bulkCreate([
            {id: 'WD', name: 'Web Dev'},
            {id:'AD', name: 'Android'},
            {id:'ML', name: 'MLearning'}
        ],
        {
            ignoreDuplicate: true
        })
    }   
    catch(e){
        console.error(e);
    }
}

seed();