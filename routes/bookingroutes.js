const express = require('express');
const router = express.Router();
const bookingController = require("../controllers/bookingcontroller");

// Booking CRUD routes
router.post('/add', bookingController.add);   
router.get("/count1", bookingController.countBookings);
router.get("/doctorreport", bookingController.doctorReport);
router.get( "/doctor/:doctorid", bookingController.getDoctorBookings );
router.get('/', bookingController.get);             
router.get('/:id', bookingController.getById);       
router.put('/:id', bookingController.update);        
router.delete('/:id', bookingController.delete);     
module.exports = router;
