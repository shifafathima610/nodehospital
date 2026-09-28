const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Login = sequelize.define('login', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },

}, {
  tableName: 'login',
  timestamps: false, 
   freezeTableName: true   // keep table name as 'Login'

});

module.exports = Login;