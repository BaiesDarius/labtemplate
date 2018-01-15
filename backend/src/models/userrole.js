'use strict';
module.exports = (sequelize, DataTypes) => {
  var userrole = sequelize.define('userrole', {
    iduser: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userrole;
};