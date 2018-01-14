'use strict';
module.exports = (sequelize, DataTypes) => {
  var wishlist = sequelize.define('wishlist', {
    iduser: DataTypes.INTEGER,
    idgame: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return wishlist;
};