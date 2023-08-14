const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const User=require('../models/User');

const register=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hashedPassword=await bcrypt.hash(password,8);
        const user=new User({name,email,password:hashedPassword});
        await user.save();

        res.status(201).json({message:"User registered successfully"});
    }
    catch(err){
        res.status(500).json({err:"Error in User registration "})
    }
}


const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});

        if(!user){
            return res.status(401).json({error:"Invalid credentials"});
        }

        const token=jwt.sign({userId:user._id},process.env.MyKey,{expiresIn:'1d'});
        res.status(201).json({token});
    }
    catch(err){
        res.status(500).json({err:"Error in User registration "})
    }
}

module.exports={
    register,login
}