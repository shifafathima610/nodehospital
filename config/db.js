const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospitaldetails', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log(' Connected to MySQL'))
  .catch(err => console.log('Error:', err));

// sequelize.sync({ alter: true })
//   .then(() => console.log("Database synced"))
//   .catch(err => console.error("Sync error:", err));


module.exports = sequelize;
