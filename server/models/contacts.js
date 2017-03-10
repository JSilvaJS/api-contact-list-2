'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contacts = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contacts;
};