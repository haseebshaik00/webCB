const express = require('express'),
      app = express(),
      path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(__dirname + '/public'));
app.use('/api', require('./routes/api'));

app.listen(3137, () => {
    console.log("server started at https://localhost:3137")
})