const Flight=require('../models/Flight');

const getAllFlights=async (req,res)=>{
    try{
        const flights=await Flight.find();
        res.status(200).json(flights)
    }catch(err){
        res.status(500).json({err:"Error in getting flights"})
    }
}


const getFlightById=async (req,res)=>{
    try{
        const flight=await Flight.findById(req.params.id);
        res.status(200).json(flight);
    }catch(err){
        res.status(500).json({err:"Error in getting flight"})
    }
}


const createFlight=async (req,res)=>{
    try{
        const flight=new Flight(req.body);
        await flight.save();
        res.status(201).json({message:'Flight created successfully'})
    }catch(err){
        res.status(500).json({err:"Error in creating flight"})
    }
}


const updateFlight=async (req,res)=>{
    try{
await Flight.findByIdAndUpdate(req.params.id,req.body);
res.status(204).send();
    }catch(err){
        res.status(500).json({err:"Error in updating flight"})
    }
}

const deleteFlight=async (req,res)=>{
    try{
        await Flight.findByIdAndDelete(req.params.id);
        res.status(202).send();
    }catch(err){
        res.status(500).json({err:"Error in deleting flight"})
    }
}


module.exports={
    getAllFlights,getFlightById,createFlight,updateFlight,deleteFlight
}