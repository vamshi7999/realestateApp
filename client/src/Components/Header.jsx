import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
   <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-screen-2xl mx-auto p-3'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Vk</span>
        <span className='text-slate-700'> Estate</span>
    </h1>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
        <input type="text" placeholder='search...' className='bg-transparent'></input>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/About'>
            <li>About</li>
            </Link>
            <Link to='/Sign-in'>
            <li>Sign In</li>
            </Link>
         <Link to='/Sign-up'>
            <li>Sign Up</li>
            </Link>
            
        </ul>
    </form>
    </div>
   </header>
  )
}
