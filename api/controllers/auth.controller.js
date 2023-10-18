import User from '../modal/schema.js'
import bcryptjs from 'bcryptjs'


export const signUp=async(req,res)=>{
    const {userName,passWord,emailId}=req.body
    const hashedPassword=bcryptjs.hashSync(passWord,10)
    try{
        const newUser= new User({
            username:userName,
            password:hashedPassword
        })
    
        await newUser.save()
        res.status(200).json('User registered successfully' );
    }catch(err){
        console.log("--------------",err)
        res.status(500).send("internal server error")
    }
   
}