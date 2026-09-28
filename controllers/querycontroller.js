const Docter = require("../models/doctermodel");
const Patient = require("../models/patientmodel");
const Query = require("../models/querymodel");

exports.add = async (req, res) => {
  try {
    await Query.create({ ...req.body, status: "pending" });
    res.send("Query Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.get = async (req, res) => {
  try {
    const query = await Query.findAll({
      include: [
        { model: Patient, as: "patient" },
        { model: Docter, as: "docter" }
      ]
    });
    res.json(query);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch Query");
  }
};

exports.getqueryById = async (req, res) => {
  try {
    const query = await Query.findByPk(req.params.id);
    if (!query) {
      return res.status(404).json({ message: "Query not found" });
    }
    res.json(query);
  } catch (err) {
    res.status(500).send(err.message);
  }
};