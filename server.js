const express = require('express');
const app = express();
const sequelize = require('./config/db');
const departmentRoutes = require('./routes/departmentroutes');
const docterRoutes = require('./routes/docterroutes');
const staffRoutes = require('./routes/staffroutes');
const patientRoutes = require('./routes/patientroutes');
const bookingRoutes = require('./routes/bookingroutes');
const prescribeRoutes = require('./routes/prescriberoutes');
const reviewRoutes = require('./routes/reviewroutes');
const queryRoutes = require('./routes/queryroutes');
const complaintRoutes = require('./routes/complaintroutes');
const loginRoutes = require("./routes/loginroutes");
const notificationRoutes = require("./routes/notificationroutes");

const cors= require("cors");
app.use(cors());
app.use(express.json());

// routes
app.use('/department',departmentRoutes);
app.use('/docters',docterRoutes);
app.use('/staff',staffRoutes);
app.use('/patient',patientRoutes);
app.use('/booking',bookingRoutes);
app.use('/prescribe', prescribeRoutes);
app.use('/review', reviewRoutes);
app.use('/query', queryRoutes);
app.use('/complaint', complaintRoutes);
app.use('/login', loginRoutes);
app.use('/notification', notificationRoutes);




// create table automatically
sequelize.sync()
  .then(() => console.log(" Tables created"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log(" Server running on port 3000");
});
