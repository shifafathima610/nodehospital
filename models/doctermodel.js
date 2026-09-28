const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Department = require('./departmentmodel');

const Docter = sequelize.define('docter', {
  docterid: {
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
  address: {
    type: DataTypes.STRING
  },
    age: {
    type: DataTypes.STRING
  },
  qualification: {
    type: DataTypes.STRING
  },
    experience :
     {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active"  
  },

  departmentid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Department,
      key: 'departmentid'
    }
  }

}, {
  tableName: 'docter',
  timestamps: false
});

Docter.belongsTo(Department, { foreignKey: "departmentid", as: "department" });
Department.hasMany(Docter, { foreignKey: "departmentid",  });

module.exports = Docter;
