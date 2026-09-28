const express = require('express');
const router = express.Router();
const queryController = require('../controllers/querycontroller');

router.post('/add', queryController.add);
router.get('/', queryController.get);
router.get('/:id', queryController.getqueryById);
// router.put('/:id', patientController.update);
// router.delete('/:id', patientController.delete);

module.exports = router;

