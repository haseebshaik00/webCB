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
//////////////////////////////////////////////////////// STEPS ////////////////////////////////////////////////////////
// .. server is started -> get request on http://localhost:4444/pages -> persons.hbs is rendered -> page shows all the data ->
// .. click add person -> get req on http://localhost:4444/pages/add redirects to -> http://localhost:4444/pages/add 
// person_add.hbs gets rendered -> post req on http://localhost:4444/pages/add -> data added and http://localhost:4444/pages/ 
// .. gets rendered


// the second website is kind of an api, where the server is at routes/api and the working is done in the frontend using 
// .. jquery and ajax calls
//////////////////////////////////////////////////////// STEPS ////////////////////////////////////////////////////////
// server is started -> get req on http://localhost:4444 -> main page gets loaded - index.html -> when jquery is loaded 
// .. data in database is displayed on the screen through get req made on http://localhost:4444/api/persons -> data is entered 
// .. and submit button is clicked -> post req is sent on http://localhost:4444/api/persons then data is added to database -> 
// .. and get req 
// .. is made on http://localhost:4444/api/persons which loads the page again http://localhost:4444/api/persons-> this hits the 
// .. jquery again and the all the details with new details are displayed again 