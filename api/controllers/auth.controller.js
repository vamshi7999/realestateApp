import User from '../modal/schema.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'


export const signUp=async(req,res,next)=>{
    const {username,password,emailId}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    try{
        const newUser= new User({
            username:username,
            password:hashedPassword
        })
    
        await newUser.save()
        res.status(200).json('User registered successfully' );
    }catch(err){
       next(err)
    //    next (errorHandler(550,"error from a function"))
       
    }
   
}