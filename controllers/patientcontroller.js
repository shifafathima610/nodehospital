const Patient = require("../models/patientmodel");
const Login = require("../models/loginmodel");
const { Sequelize } = require("sequelize");

exports.addpatient = async (req, res) => {
  try {
    // Create patient record
    const patient = await Patient.create({
      ...req.body,
      status: "active",
    });

    // Also create a User record for login
    await Login.create({
      username: req.body.email,   // email as username
      password: req.body.phone,   // phone as password (⚠️ hash in real apps)
      category: "patient"
    });

    res.send("Patient & User Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.get = async (req, res) => {
  try {
    const patient = await Patient.findAll();
    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch patient");
  }
};

exports.delete = async (req, res) => {
  try {
    await Patient.destroy({ where: { patientid: req.params.id } }); // ✅ lowercase
    res.send("Patient Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};




exports.getpatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "patient not found" });
    }
    res.json(patient);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.countPatients = async (req, res) => {
  try {

    const count = await Patient.count();

    res.json({
      count: count
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error counting patients"
    });

  }
};



exports.monthlyPatientCount = async (req, res) => {
  try {
    const data = await Patient.findAll({
      attributes: [
        [Sequelize.fn("MONTH", Sequelize.col("date")), "month"],
        [Sequelize.fn("COUNT", Sequelize.col("patientid")), "total"]
      ],
      group: [Sequelize.fn("MONTH", Sequelize.col("date"))],
      order: [[Sequelize.fn("MONTH", Sequelize.col("date")), "ASC"]]
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};