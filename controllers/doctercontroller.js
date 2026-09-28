const Docter = require("../models/doctermodel");
const Department = require("../models/departmentmodel");
const Login = require("../models/loginmodel");

// Add doctor
exports.add = async (req, res) => {
  try {
    // Create doctor record
    const docter = await Docter.create({
      ...req.body,
      status: "active",
    });

    // Also create a User record for login
    await Login.create({
      username: req.body.email,   // email as username
      password: req.body.phone,   // phone as password (⚠️ hash in real apps)
      category: "doctor"
    });

    res.send("Doctor & User Added");
  } catch (err) {
    console.error("Add doctor error:", err);
    res.status(500).send(err.message);
  }
};

// Get all doctors
exports.get = async (req, res) => {
  try {
    const docters = await Docter.findAll({
      include: [{ model: Department, as: "department", attributes: ["name", "description"] }]
    });
    res.json(docters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch doctors");
  }
};

// Delete doctor
exports.delete = async (req, res) => {
  try {
    await Docter.destroy({ where: { docterid: req.params.id } });
    res.send("Doctor Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update doctor
exports.update = async (req, res) => {
  try {
    await Docter.update(req.body, { where: { docterid: req.params.id } });
    res.send("Doctor Updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get doctor by ID
exports.getdocterById = async (req, res) => {
  try {
    const docter = await Docter.findByPk(req.params.id, {
      include: [{ model: Department, as: "department", attributes: ["name", "description"] }]
    });
    if (!docter) return res.status(404).json({ message: "Doctor not found" });
    res.json(docter);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.countDocter = async (req, res) => {
  try {

    const count = await Docter.count();

    res.json({
      count: count
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error counting doctor"
    });

  }
};
