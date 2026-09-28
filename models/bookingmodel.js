const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Docter = require("./doctermodel");
const Patient = require("./patientmodel");

const Booking = sequelize.define("booking", {
  bookingid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
  patientid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: "patientid",  
    },
  },
  docterid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Docter,
      key: "docterid",    
    },
  },
}, {
  tableName: "booking",  
  timestamps: false,
});

// Associations
Booking.belongsTo(Patient, { foreignKey: "patientid", as: "patient" });
Patient.hasMany(Booking, { foreignKey: "patientid" });

Booking.belongsTo(Docter, { foreignKey: "docterid", as: "docter" });
Docter.hasMany(Booking, { foreignKey: "docterid" });

module.exports = Booking;
