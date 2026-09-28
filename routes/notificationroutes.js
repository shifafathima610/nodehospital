const express = require('express');
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.post("/add", notificationController.add);
router.get('/get', notificationController.getnotification);
// router.get('/:id', departmentController.getdepartmentById);
router.put('/update/:id', notificationController.updatenotification);
router.delete('/delete/:id', notificationController.deletenotification);

module.exports = router;

