"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll({ attributes: ['id', 'email', 'password', 'firstname', 'lastname'] }).then(users => {
    res.jsonp(users);
  }).catch((error) => res.status(400).send(error));
};

exports.findByEmail = function (req, res) {
  user.findOne({ where: { email: req.body.email } }).then(users => {
    res.jsonp(users);
  }).catch((error) => res.status(400).send(error));
}

exports.create = function (req, res) {
  user.create(
    { email: `${req.body.email}`, password: `${req.body.password}`, firstname: `${req.body.firstname}`, lastname: `${req.body.lastname}` },
    { fields: ['email', 'password', 'firstname', 'lastname'] })
  res.jsonp(req.body)
};

exports.findById = function (req, res) {
  let id = req.params.id;
  user.findById(id, { attributes: ['id', 'email', 'password', 'firstname', 'lastname'] }).then(user => {
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  user.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};