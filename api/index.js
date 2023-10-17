import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const App= express()

mongoose.connect(process.env.MONGO)
.then(()=>{
   console.log("connected to mongo db")
})
.catch((err)=>{
  console.log(err)
})
App.listen(3000,()=>{
    console.log('server running on port 3000')
})