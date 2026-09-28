const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintcontroller');

router.post('/add', complaintController.add);
router.get('/', complaintController.get);
router.get('/:id', complaintController.getComplaintById);


module.exports = router;

