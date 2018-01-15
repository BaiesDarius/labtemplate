"use strict";

const cart = require('../models').cart;

exports.list = function (req, res) {
  cart.findAll({ attributes: ['id', 'iduser', 'idgame']}).then(carts => {
    res.jsonp(carts);
  }).catch((error) => res.status(400).send(error));
};
exports.getByUserId = function(req,res){
  cart.findAll({attributes:['id','iduser','idgame']},
  {where: {iduser:req.body.iduser}}).then(found=>{
    res.jsonp(found)
  }).catch((error) => res.status(400).send(error));
}
exports.findByUserAndGameId = function(req,res){
  cart.findOne({where:{iduser:req.body.iduser,idgame:req.body.idgame}
  }).then(found=>{res.jsonp(found)
  }).catch((error)=>{console.log("smth")});
}
exports.create = function (req, res) {
  cart.create(
    { iduser: `${req.body.iduser}`, idgame: `${req.body.idgame}`},
    { fields: ['iduser', 'idgame']})
  res.jsonp(req.body)
};

exports.findById = function (req, res) {
  let id = req.params.id;
  cart.findById(id, { attributes: ['id', 'iduser', 'idgame'] }).then(cart => {
    if (!cart) {
      return res.status(400).send({
        message: 'Cart Not Found',
      });
    }
    res.jsonp(cart);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  cart.findById(req.params.id)
    .then(cart => {
      if (!cart) {
        return res.status(400).send({
          message: 'Cart Not Found',
        });
      }
      return cart
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};