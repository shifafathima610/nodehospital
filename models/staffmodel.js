const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Staff = sequelize.define('staff', {
  staffid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
    email: {
    type: DataTypes.STRING
  },

  qualification: {
    type: DataTypes.STRING
  },


}, {
  tableName: 'staff',
  timestamps: false
});

module.exports = Staff;
