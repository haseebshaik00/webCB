const route = require('express').Router(),
      Product = require('../../db/model').Product;

route.get('/', (req,res) => {
    Product.findAll()
        .then((products) => {res.status(200).send(products)})
        .catch((err) => {res.status(500).send({error: "Could not retrieve Users"})});
    });

route.post('/', (req,res) => {

    if(isNaN(parseFloat(req.body.price))){
        return res.status(403).send({
            error: "Enter valid Price"
        });
    }

    Product.create({name: req.body.name, manufacturer: req.body.manufacturer, price: parseFloat(req.body.price)})
        .then((user) => {res.status(201).send(user)})
        .catch((err) => {res.status(501).send({error: "Could not add User"})});
    });

exports = module.exports = route