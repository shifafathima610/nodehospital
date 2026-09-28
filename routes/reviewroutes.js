const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewcontroller');

router.post('/add', reviewController.add);
router.get('/', reviewController.get);
router.get('/:id', reviewController.getreviewById);
// router.put('/:id', patientController.update);
// router.delete('/:id', patientController.delete);

module.exports = router;

