const express = require("express"),
      app = express();

app.use(express.urlencoded({ extended : true}));
app.use('/', express.static(__dirname + '/public'))

function decrypt(req, res, next){
    let a = req.query.outEncryptCode;
    let b="";
    for(let i=0;i<a.length-1;i++)
        b += a[i];
    req.query.outEncryptCode=b;
    next();
}

function decodeit(req, res, next){
    req.query.outEncryptCode = new Buffer(req.query.outEncryptCode, 'base64').toString('ascii');
    next();
}

app.get("/answer", decrypt, decodeit, (req,res) => {
    res.send(req.query.outEncryptCode);
});

app.listen(4446, (req,res) => {
    console.log("server started on http://localhost:4446");
});