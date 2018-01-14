'use strict';
module.exports = (sequelize, DataTypes) => {
  var cart = sequelize.define('cart', {
    iduser: DataTypes.INTEGER,
    idgame: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cart;
};