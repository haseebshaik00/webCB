const express = require('express'),
      app = express(),
      path = require('path'),
      {Center, Season, Course, Batch} = require('./db/model');


app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.get('/batchcode', async (req,res) => {
    try{
        const centers = await Center.findAll();
        const seasons = await Season.findAll();
        const courses = await Course.findAll();
        const years = [2018,2019,2020,2021,2022];
        res.render('batchcode',{
            centers, seasons, courses,years
        });
    }
    catch(e){
        console.error(e);
    }
});

app.post('/batchcode', async (req, res) => {
    let batchcode = ''; //WD PP 18 S 1
    batchcode = req.body.course + req.body.center + req.body.year.substr(2) + req.body.season + req.body.bno;
    
    try{
        const batch = await Batch.create({
            code: batchcode,
            year: req.body.year.substr(2),
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start: Date.parse(req.body.start),
            end: Date.parse(req.body.end)
        })
        console.log(batch);
        res.send(batch.code);
    }
    catch(e){
        console.error(e);
    }
});

app.get("/batches", async(req, res) => {
    try{
        const batches = await Batch.findAll({
            include: [Course, Season, Center]
        });
        res.render('batches', {batches});
    }
    catch(e){
        console.error(e);
    }
}); 

module.exports = {
    app
}