const route = require('express').Router();

route.get("/", (req, res) =>  {
    db.getAllPersons()
         .then((persons) => {
              res.render('persons', {persons})
         })
         .catch((err) => {
              res.render(err);
         });
});

route.get("/add", (req, res) => {
    res.render("persons_add");
});

route.post("/add", (req,res) => {
    db.addPerson(req.body.id, req.body.name)
    .then(() => {
         res.redirect("/pages");
    })
    .catch(() => {
         res.render(err);
    });
});

exports = module.exports = {
    route
}