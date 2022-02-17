const express = require('express'),
      app = express(),
      path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");

app.use('/pages', require('./routes/pages').route);
app.use('/api', require('./routes/api').route);
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(4444, () => {
    console.log("server started");
});

// here the fully backend driven website containes - routes with pages and views folder --- the working is done in routes/pages
// .. and the output is sent to the client directly 

// the second website is a kind of an api, where the server is at routes/api and the working is done in the frontend using 
// .. jquery and ajax calls