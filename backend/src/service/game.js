"use strict";

const game = require('../models').game;

exports.list = function (req, res) {
  game.findAll({ attributes: ['id', 'title', 'price', 'description', 'rating'] }).then(games => {
    res.jsonp(games);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  game.create(
    { title: `${req.body.title}`, description: `${req.body.description}`, price: `${req.body.price}`, rating: `${req.body.rating}` },
    { fields: ['title', 'price', 'description', 'rating'] })
  res.jsonp(req.body)
};


exports.findById = function (req, res) {
  let id = req.params.id;
  game.findById(id, { attributes: ['id', 'title', 'price', 'description', 'rating'] }).then(game => {
    if (!game) {
      return res.status(400).send({
        message: 'Game Not Found',
      });
    }
    res.jsonp(game);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  game.findById(req.params.id)
    .then(game => {
      if (!game) {
        return res.status(400).send({
          message: 'Game Not Found',
        });
      }
      return game
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};