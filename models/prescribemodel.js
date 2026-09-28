const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Docter = require("./doctermodel");
const Patient = require("./patientmodel");
const Booking = require("./bookingmodel");

const Prescribe = sequelize.define("prescribe", {
  prescribeid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  prescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medicine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remark: {
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

    bookingid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Booking,
      key: "bookingid",    
    },
  },

}, {
  tableName: "prescribe",  
  timestamps: false,
});

// Associations
Prescribe.belongsTo(Patient, { foreignKey: "patientid", as: "patient" });
Patient.hasMany(Prescribe, { foreignKey: "patientid" });

Prescribe.belongsTo(Docter, { foreignKey: "docterid", as: "docter" });
Docter.hasMany(Prescribe, { foreignKey: "docterid" });

Prescribe.belongsTo(Booking, { foreignKey: "bookingid", as: "booking" });
Booking.hasMany(Prescribe, { foreignKey: "bookingid" });

module.exports = Prescribe;
