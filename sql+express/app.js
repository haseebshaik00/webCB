const express = require('express'),
      app = express(),
      db = require('./db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");

app.get("/", (req, res) =>  {
    db.getAllPersons()
        .then((persons) => {
            res.render('persons', {persons})
        })
        .catch((err) => {
            res.render(err);
        });
});

app.get("/add", (req, res) => {
    res.render("persons_add");
});

app.post("/add", (req,res) => {
    db.addPerson(req.body.id, req.body.name)
    .then(() => {
        res.redirect("/");
    })
    .catch(() => {
        res.render(err);
    });
});

app.listen(4444, () => {
    console.log("server started");
})