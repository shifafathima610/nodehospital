const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Patient = sequelize.define('patient', {
  patientid: {
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
    pincode: {
    type: DataTypes.STRING
  },

  age: {
    type: DataTypes.STRING
  },
    address :
     {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active"  
  },
  date: {                       
   type: DataTypes.STRING,
  },
  email: { type: DataTypes.STRING,
  },

}, {
  tableName: 'patient',
  timestamps: false
});



module.exports = Patient;
