const Complaint = require("../models/complaintmodel");
const Docter = require("../models/doctermodel");
const Patient = require("../models/patientmodel");

exports.add = async (req, res) => {
  try {
    await Complaint.create(req.body);
    res.send("Complaint Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.get = async (req, res) => {
  try {
    const complaint = await Complaint.findAll({
      include: [
        { model: Patient, as: "patient" },
        { model: Docter, as: "docter" }
      ]
    });
    res.json(complaint);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch Complaint");
  }
};

exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findByPk(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.json(complaint);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
