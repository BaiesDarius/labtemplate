"use strict";

const wishlist = require('../models').wishlist;

exports.list = function (req, res) {
  wishlist.findAll({ attributes: ['id', 'iduser', 'idgame']}).then(wishlists => {
    res.jsonp(wishlists);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  wishlist.create(
    { iduser: `${req.body.iduser}`, idgame: `${req.body.idgame}`},
    { fields: ['iduser', 'idgame']})
  res.jsonp(req.body)
};

exports.findById = function (req, res) {
  let id = req.params.id;
  wishlist.findById(id, { attributes: ['id', 'iduser', 'idgame'] }).then(wishlist => {
    if (!wishlist) {
      return res.status(400).send({
        message: 'Wishlist Not Found',
      });
    }
    res.jsonp(wishlist);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  wishlist.findById(req.params.id)
    .then(wishlist => {
      if (!wishlist) {
        return res.status(400).send({
          message: 'Wishlist Not Found',
        });
      }
      return wishlist
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};