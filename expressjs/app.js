const express = require('express');

let app = express();

// body parser - parse body of a req
app.use(express.urlencoded({extended: true}));
// tells express which templating lang have been used can be hbs, ejs ... 
app.set('view engine', 'hbs');

// this sort of function (req,res) is a called a middleware
app.get("/", (req,res) => {
    res.send("<h1 style='color: red;'>Hi!</h1>");
});

app.get("/hi", (req,res) => {
    let guest = "haseeb";
    //console.log(req);
    console.log(req.headers);
    console.log(req.url);
    console.log(req.query);
    // query parameters can be sent in get req and based on this the server can respond accordingly
    // url : localhost:4444/hi?guest=kunal
    // works with get requests only
    if(req.query.guest)
        guest = req.query.guest;
    // else throw new Error("error occured");       
    res.send("Hi " + guest);
});

app.post("/hi", (req,res) => {
    // prints undefined with urlencoded body parser
    console.log(req.body);
    res.send("Hi " + req.body.name);
});

app.get("/form", (req,res) => { 
    res.sendFile(__dirname + '/form.html');
});

// variables in the url with : are called as url path parameters and access thorugh req.params
app.get("/city/:city", (req,res) => { 
    res.send(req.params.city);  
});

// addtask in list
let task =['simple task'];
app.post("/task", (req, res) => {
    task.push(req.body.newTask);
    // whenever we write this the browser redirects this to "/task" with a get req always
    // .. not a post req
    res.redirect("/task");
});

app.listen(4444, () => {
    // this can be also accessed with 
    // .. my own ip address : 4444 - others connected to the same wifi can also access this
    // .. 0.0.0.0:4444 - 0.0.0.0 : is ip address of my own comp
    // .. 127.0.0.1:4444 - 127.0.0.1 : is ip address of my own comp
    console.log("Server started on port http://localhost:4445");
}); 