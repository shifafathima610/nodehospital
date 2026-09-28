const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Department = sequelize.define('department', {
  departmentid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },

}, {
  tableName: 'department',
  timestamps: false
});

module.exports = Department;
