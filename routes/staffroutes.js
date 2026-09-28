const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffcontroller');

router.post('/addstaff', staffController.addstaff);
router.get("/count1", staffController.countStaff);
router.get('/', staffController.get);
router.get('/:id', staffController.getStaffById);
router.put('/:id', staffController.update);
router.delete('/:id', staffController.delete);

module.exports = router;

