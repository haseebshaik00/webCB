const express = require("express")
      app = express();

// we basically store the frontend related stuff here and the folders inside this, can be access through /public/xyz/..
// .. we are mounting the public folder on xyz route
// .. whichever things you want the user to see will go to the public folder
app.use("/xyz", express.static(__dirname + "/public"));

app.get("/hi", (req,res) => {
    res.send("hi");
});


// blueprint of a middleware .. has a request, response and a next parameter 
// .. once next() is called it goes to the next middleware .. after sending the response .. and anything 
// .. written below the next() will execute in the background
// .. only one response can be send from a single middleware, hence once the next() is called 
// .. we cant send anything more in the response
function m1 (req, res, next) {
    console.log('m1 pre-next')
    next()
    console.log('m1 post-next')
}

function m2 (req, res, next) {
    console.log('m2 pre-next')
    next()
    console.log('m2 post-next')
}

function m3 (req, res, next) {
    console.log('m3 pre-next')
    next()
    console.log('m3 post-next')
}

// also a middleware .. but doesnt have a next ..  we can add any number of middlewares in between 
// .. the route and the (req,res) function .. the get func will first execute the m1,m2,m3 first and then itself
app.get('/hello', m1, m2, m3, (req, res) => {
    console.log('pre-send')
    res.send('Hello World')
    console.log('post-send')
})

app.listen(4444, (req, res) => {    
    console.log("server started");
});