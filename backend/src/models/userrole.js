'use strict';
module.exports = (sequelize, DataTypes) => {
  var userrole = sequelize.define('userrole', {
    iduser: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userrole;
};