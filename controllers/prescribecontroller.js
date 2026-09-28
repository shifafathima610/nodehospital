const Docter = require("../models/doctermodel");
const Patient = require("../models/patientmodel");
const Booking = require("../models/bookingmodel");
const Prescribe = require("../models/prescribemodel");
const Department = require("../models/departmentmodel");

// Add doctor
exports.add = async (req, res) => {
  try {
    await Prescribe.create(req.body);
    res.send("Prescription Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
  
};

// Get all prescribe
exports.get = async (req, res) => {
  try {
    const prescribe = await Prescribe.findAll({
      include: [
        { model: Patient, as: "patient" },
        { model: Docter, as: "docter",include: [
            {
              model: Department,
              as: "department"
            }
          ]},  
        { model: Booking, as: "booking" }

      ]    });
    res.json(prescribe);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch prescribe");
  }
};

exports.getByPatientId = async (req, res) => {
  try {
    const prescribe = await Prescribe.findAll({
      where: { patientid: req.params.patientid },
      include: [
        { model: Patient, as: "patient" },
        { model: Docter, as: "docter" },
        { model: Booking, as: "booking" }
      ],
      order: [["prescribeid", "DESC"]]
    });
    res.json(prescribe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.getprescribeById = async (req, res) => {
  try {
    const prescribe = await Prescribe.findByPk(req.params.id);
    if (!prescribe) {
      return res.status(404).json({ message: "Prescribe not found" });
    }
    res.json(prescribe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};