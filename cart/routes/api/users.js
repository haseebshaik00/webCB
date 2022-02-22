const route = require('express').Router(),
      User = require('../../db/model').User;

route.get('/', (req,res) => {
    User.findAll()
        .then((users) => {res.status(200).send(users)})
        .catch((err) => {res.status(500).send({error: "Could not retrieve Users"})});
});

route.post('/', (req,res) => {
    User.create({name: req.body.name})
        .then((user) => {res.status(201).send(user)})
        .catch((err) => {res.status(501).send({error: "Could not add User"})});
});

exports = module.exports = route