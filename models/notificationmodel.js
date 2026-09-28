const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Notification = sequelize.define(
  "notification",
  {
    notificationid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    date: {
      type: DataTypes.STRING
    },

    notification: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "notifications",
    timestamps: false
  }
);

module.exports = Notification;