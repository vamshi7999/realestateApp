import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './Routers/user.route.js'
dotenv.config()
const app= express()
app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(()=>{
   console.log("connected to mongo db")
})
.catch((err)=>{
  console.log(err)
})
app.listen(3000,()=>{
    console.log('server running on port 3000')
})

app.use('/api',userRouter)
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500
  const message=err.message || "Internal Server Error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })

})