const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Docter = require('./doctermodel');
const Patient = require("./patientmodel");

const Query = sequelize.define('query', {
    queryid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    query:
    {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pending"
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
    tableName: 'query',
    timestamps: false
});

Query.belongsTo(Patient, { foreignKey: "patientid", as: "patient" });
Patient.hasMany(Query, { foreignKey: "patientid" });

Query.belongsTo(Docter, { foreignKey: "docterid", as: "docter" });
Docter.hasMany(Query, { foreignKey: "docterid" });

module.exports = Query;
