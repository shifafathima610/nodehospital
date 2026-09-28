const express = require('express');
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.post("/add", departmentController.add);
router.get('/', departmentController.getdepartment);
router.get("/count1", departmentController.countDepartment);
router.get('/:id', departmentController.getdepartmentById);
router.put('/:id', departmentController.updatedepartment);
router.delete('/:id', departmentController.deletedepartment);

module.exports = router;

