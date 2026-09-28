const express = require('express');
const router = express.Router();
const docterController = require('../controllers/doctercontroller');

router.post('/add', docterController.add);
router.get("/count1", docterController.countDocter);
router.get('/', docterController.get);
router.get('/:id', docterController.getdocterById);
router.put('/:id', docterController.update);
router.delete('/:id', docterController.delete);

module.exports = router;

