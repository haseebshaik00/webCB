const express = require('express'),
      app = express();

app.use(express.urlencoded({ extended : true}));
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

let taskList = ['inbuilt task'];


// to add a new li : get "/" -> form rendered and displayed -> form is filled and sent to "/" as post req 
// .. -> new data entered into the tasklist -> get is rendered again -> new li added 
app.get("/", (req, res) => {
    res.render("todo_frontend", {
        title: "Todo_List",
        taskList
    });
});

app.post("/", (req, res) => {
    taskList.push(req.body.newtask);
    res.redirect("/");
});

app.listen(4445, (req,res) => {
    console.log("server started");
});