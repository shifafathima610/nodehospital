// const express = require('express');
// const router = express.Router();
// const prescribeController = require("../controllers/prescribecontroller");

// router.post('/add', prescribeController.add);
// router.get('/', prescribeController.get);

// router.get("/", prescribeController.getprescribeById);
// module.exports = router;

const express = require('express');
const router = express.Router();
const prescribeController = require("../controllers/prescribecontroller");

router.post('/add', prescribeController.add);


// Get prescriptions by patientid
router.get('/patient/:patientid', prescribeController.getByPatientId);


router.get('/', prescribeController.get);
router.get('/:id', prescribeController.getprescribeById);

module.exports = router;
