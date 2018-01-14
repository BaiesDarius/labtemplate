"use strict";

const userrole = require('../models').userrole;

exports.list = function (req, res) {
  userrole.findAll({ attributes: ['id', 'iduser', 'role']}).then(userroles => {
    res.jsonp(userroles);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  userrole.create(
    { iduser: `${req.body.iduser}`, role: `${req.body.role}`},
    { fields: ['iduser', 'role']})
  res.jsonp(req.body)
};

exports.findById = function (req, res) {
  let id = req.params.id;
  userrole.findById(id, { attributes: ['id', 'iduser', 'role'] }).then(userrole => {
    if (!userrole) {
      return res.status(400).send({
        message: 'Userrole Not Found',
      });
    }
    res.jsonp(userrole);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  userrole.findById(req.params.id)
    .then(userrole => {
      if (!userrole) {
        return res.status(400).send({
          message: 'Userrole Not Found',
        });
      }
      return userrole
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};