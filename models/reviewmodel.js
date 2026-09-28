const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Docter = require('./doctermodel');

const Review = sequelize.define('review', {
  reviewid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.STRING,
  },
  review: {
    type: DataTypes.STRING
  },


  docterid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Docter,
      key: 'docterid'
    }
  }

}, {
  tableName: 'review',
  timestamps: false
});

Review.belongsTo(Docter, { foreignKey: "docterid", as: "docter" });
Docter.hasMany(Review, { foreignKey: "docterid", });

module.exports = Review;
