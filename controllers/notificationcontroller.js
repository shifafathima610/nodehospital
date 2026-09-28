 const Notification = require("../models/notificationmodel");

exports.add = async (req, res) => {
  try {
    await Notification.create(req.body);
    res.send("notification Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getnotification = async (req, res) => {
  try {
    const notification = await Notification.findAll();
    res.json(notification);
  } catch (err) {
    res.status(500).send(err.message);
  }
};



exports.deletenotification= async (req, res) => {
  try {
    await Notification.destroy({
      where: { notificationid: req.params.id }
    });
    res.send("notification Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};




exports.updatenotification = async (req, res) => {
  try {
    await Notification.update(req.body, {
      where: { notificationid: req.params.id }
    });
    res.send("notification Updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};


// exports.getdepartmentById = async (req, res) => {
//   try {
//     const department = await Department.findByPk(req.params.id);
//     if (!department) {
//       return res.status(404).json({ message: "department not found" });
//     }
//     res.json(department);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };
