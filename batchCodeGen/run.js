const {db} = require('./db/model');
const {app} = require('./app');

const start = async() => {
    try{    
        await db.sync();
        
        app.listen(3131, () => {
            console.log("server started");
        });
    }   
    catch(e){
        console.error(e);
    }
}

start();