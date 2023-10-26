import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData,setFormData]= useState({})

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const res= await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
   })
   const data= await res.json()
   console.log("huii")
  }catch(err){
   console.log(err)
  }
    }
   
  
const  handleChange = (e) =>{
      setFormData(
        {
          ...formData,
          [e.target.id]:e.target.value

        }
      )
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input type="text" placeholder='userName'
       className='border p-3 rounded-lg' id="username"
       onChange={handleChange} />
       <input type="text" placeholder='email' 
       className='border p-3 rounded-lg' id="email" />
       <input type="password" placeholder='password' 
       className='border p-3 rounded-lg' id="password" 
       onChange={handleChange}/>
       <button type='submit' className='bg-slate-700 text-white p-3'>SIGN UP</button>
      </form>
      <p>Have an account?</p>
      <Link to={"/sign-in"}>
        <span className="text-blue-700"> Sign In</span>
        </Link>

    </div>
  )
}
