 const Staff = require("../models/staffmodel");
const Login = require("../models/loginmodel");

exports.addstaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);

    await Login.create({
      username: req.body.email,   // email as username
      password: req.body.phone,   // phone as password
      category: "staff"
    });

    res.send("Staff & User Added");
  } catch (err) {
    console.error("Add staff error:", err);
    res.status(500).send(err.message);
  }
};


// GET all staff
exports.get = async (req, res) => {
  try {
    const staff = await Staff.findAll();
    res.json(staff);
  } catch (err) {
    res.status(500).send(err.message);
  }
};



exports.delete = async (req, res) => {
  try {
    await Staff.destroy({
      where: { staffid: req.params.id }
    });
    res.send("Staff Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};




exports.update = async (req, res) => {
  try {
    await Staff.update(req.body, {
      where: { staffid: req.params.id }
    });
    res.send("Saff Updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    res.json(staff);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.countStaff = async (req, res) => {
  try {
    const count = await Staff.count();

    res.json({
      count,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};