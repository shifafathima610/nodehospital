const Docter = require("../models/doctermodel");   // matches Docter.js
const Staff = require("../models/staffmodel");     // matches Staff.js
const Patient = require("../models/patientmodel");
const Login = require("../models/loginmodel");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check login table
    const a = await Login.findOne({ where: { username, password } });
    if (!a) {
      return res.status(401).json({ success: false, message: "Invalid username or password" });
    }

    let loginId = null;

    // Role-specific lookup
    switch (a.category.toLowerCase()) {
      case "patient":
        const patient = await Patient.findOne({ where: { email: username } });
        if (patient) loginId = patient.patientid;
        break;
      case "doctor":   // category string is "doctor", but model file is Docter.js
        const doctor = await Docter.findOne({ where: { email: username } });
        if (doctor) loginId = doctor.docterid;
        break;
      case "staff":
        const staff = await Staff.findOne({ where: { email: username } });
        if (staff) loginId = staff.staffid;
        break;
    }

    res.json({
      success: true,
      category: a.category,
      loginId,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
