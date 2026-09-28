const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Docter = require('./doctermodel');
const Patient = require("./patientmodel");

const Complaint = sequelize.define('complaint', {
    compid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    complaint:
    {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING,
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
    tableName: 'complaint',
    timestamps: false
});

Complaint.belongsTo(Patient, { foreignKey: "patientid", as: "patient" });
Patient.hasMany(Complaint, { foreignKey: "patientid" });

Complaint.belongsTo(Docter, { foreignKey: "docterid", as: "docter" });
Docter.hasMany(Complaint, { foreignKey: "docterid" });

module.exports = Complaint;
