const Booking=require('../models/Booking');

const bookFlight=async(req,res)=>{
    try{
        const {flightId}=req.body;
        const booking=new Booking({user:req.user.userId,flight:flightId});
        await booking.save();
        res.status(201).json({message:"Flight booked successfully"});
    }catch(err){
        res.status(500).json({err:"Error in booking flight"})
    }
}


const getBookings=async (req,res)=>{
    try{
        const bookings=await Booking.find().populate('user flight');
        res.status(200).json(bookings);
    }catch(err){
        res.status(500).json({err:"Error in getting booking"})
    }
}


const updateBooking=async (req,res)=>{
    try{
        await Booking.findByIdAndUpdate(req.params.id,req.body);
        res.status(204).send();
    }catch(err){
        res.status(500).json({err:"Error in updating booking"})
    }
}


const deleteBooking=async (req,res)=>{
    try{
        await Booking.findByIdAndDelete(req.params.id);
        res.status(202).send();
    }catch(err){
        res.status(500).json({err:"Error in deleting booking"})
    }
}


module.exports={
    bookFlight,
    getBookings,
    updateBooking,
    deleteBooking
}