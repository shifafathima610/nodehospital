 const Department = require("../models/departmentmodel");

exports.add = async (req, res) => {
  try {
    await Department.create(req.body);
    res.send("Department Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getdepartment = async (req, res) => {
  try {
    const department = await Department.findAll();
    res.json(department);
  } catch (err) {
    res.status(500).send(err.message);
  }
};



exports.deletedepartment = async (req, res) => {
  try {
    await Department.destroy({
      where: { departmentid: req.params.id }
    });
    res.send("Department Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};




exports.updatedepartment = async (req, res) => {
  try {
    await Department.update(req.body, {
      where: { departmentid: req.params.id }
    });
    res.send("Department Updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.getdepartmentById = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ message: "department not found" });
    }
    res.json(department);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.countDepartment = async (req, res) => {
  try {

    const count = await Department.count();

    res.json({
      count: count
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error counting Department"
    });

  }
};