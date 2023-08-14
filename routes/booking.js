const express=require('express');

const router=express.Router();

const bookingController=require('../controllers/booking');


router.post('/',bookingController.bookFlight);
router.get('/dashboard',bookingController.getBookings);
router.put('/:id',bookingController.updateBooking);
router.patch('/:id',bookingController.updateBooking);
router.delete('/:id',bookingController.deleteBooking);


module.exports=router;