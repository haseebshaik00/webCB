const express = require('express');

let app = express();

// this sort of function (req,res) is a called a middleware
app.get("/", (req,res) => {
    res.send("Hi");
});

app.listen(4444, () => {
    // this can be also accessed with 
    // .. my own ip address : 4444 - others connected to the same wifi can also access this
    // .. 0.0.0.0:4444 - 0.0.0.0 : is ip address of my own comp
    // .. 127.0.0.1:4444 - 127.0.0.1 : is ip address of my own comp
    console.log("Server started on port http://localhost:4444");
}); 