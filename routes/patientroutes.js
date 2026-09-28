const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientcontroller');

router.post('/add', patientController.addpatient);

router.get('/', patientController.get);
router.get('/count1', patientController.countPatients);
router.get("/monthlycount", patientController.monthlyPatientCount);

router.get('/:id', patientController.getpatientById);
// router.put('/:id', patientController.update);
router.delete('/:id', patientController.delete);
module.exports = router;

