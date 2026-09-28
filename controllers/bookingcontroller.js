const Docter = require("../models/doctermodel");
const Patient = require("../models/patientmodel");
const Booking = require("../models/bookingmodel");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

// Add booking
exports.add = async (req, res) => {
  try {
    await Booking.create({ ...req.body, status: "pending" });
    res.send("Booking Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get all bookings
exports.get = async (req, res) => {
  try {
    const booking = await Booking.findAll({
      include: [
        { model: Patient, as: "patient" },
        { model: Docter, as: "docter" }
      ]
    });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch booking");
  }
};

// Get booking by ID
exports.getById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        { model: Patient, as: "patient" },
        { model: Docter, as: "docter" }
      ]
    });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update booking
exports.update = async (req, res) => {
  try {
    await Booking.update(req.body, { where: { bookingid: req.params.id } });
    res.send("Booking Updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete booking
exports.delete = async (req, res) => {
  try {
    await Booking.destroy({ where: { bookingid: req.params.id } });
    res.send("Booking Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.countBookings = async (req, res) => {
  try {

    const count = await Booking.count();
    res.json({
      count: count
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error counting appointments"
    });

  }
};


exports.doctorReport = async (req, res) => {
  try {

    const report = await Booking.findAll({

      attributes: [
        "docterid",
        [
          Sequelize.fn("COUNT", Sequelize.col("booking.bookingid")),
          "patientCount"
        ]
      ],

      include: [
        {
          model: Docter,
          as: "docter",
          attributes: ["name"]
        }
      ],

      group: [
        "booking.docterid",
        "docter.docterid",
        "docter.name"
      ]

    });

    res.json(report);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};


// Get bookings for a specific doctor
exports.getDoctorBookings = async (req, res) => {
  try {

    const doctorId = req.params.doctorid;

    console.log("Doctor ID received:", doctorId);

    const booking = await Booking.findAll({
      where: {
        docterid: doctorId
      },

      include: [
        {
          model: Patient,
          as: "patient"
        },
        {
          model: Docter,
          as: "docter"
        }
      ],

      order: [
        ["date", "ASC"],
        ["time", "ASC"]
      ]
    });

    console.log("Doctor bookings:", booking);

    res.json(booking);

  } catch (err) {

    console.error("Error fetching doctor bookings:", err);

    res.status(500).json({
      message: "Failed to fetch doctor bookings",
      error: err.message
    });

  }
};
