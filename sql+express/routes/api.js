const route = require('express').Router(),
        db  = require('../db');

route.get("/persons", (req, res) =>  {
    db.getAllPersons()
         .then((persons) => {
              res.send(persons)
         })
         .catch((err) => {
              res.send({error: err});
         });
});

route.post("/persons", (req,res) => {
    db.addPerson(req.body.id, req.body.name)
    .then(() => {
         res.redirect("/api/persons");
    })
    .catch((err) => {
        res.send({error: err});
    });
});

exports = module.exports = {
    route
}