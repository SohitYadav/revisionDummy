const express=require('express');

const mongoose=require('mongoose');

const bodyParser=require('body-parser');

const authRoutes=require('./routes/auth');

const flightRoutes=require('./routes/flights');

const bookingRoutes=require('./routes/booking');

require('dotenv').config();


const app=express();

mongoose.connect(process.env.MongoURL)
.then(()=>{
    console.log('Connected to Mongo Atlas');
})
.catch((error)=>{
    console.log({err:"Connection Failed"})
})

app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/flights',flightRoutes);
app.use('/api/booking',bookingRoutes);

app.listen(3000,()=>{
    console.log("Server is running at 3000")
})