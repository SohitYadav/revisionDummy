const mongoose=require('mongoose');

const flightSchema=new mongoose.Schema({
    airline:String,
    flightNo:String,
    departures:String,
    arrival:String,
    departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
})

const Flight=mongoose.model("Flight",flightSchema);

module.exports=Flight;