import React from 'react'
import Home from './pages/Home'
import SignIn  from './pages/SignIn'
import Profile from './pages/Profile'
import About  from './pages/About'
import SignUp from './pages/SignUp'
import Header  from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route  path="/" element={<Home/>}/>
   <Route  path="/Sign-in" element={<SignIn/>}/>
   <Route  path="/Profile" element={<Profile/>}/>
   <Route  path="/about" element={<About/>}/>
   <Route path="/sign-up" element={<SignUp/>} />
   </Routes>
   </BrowserRouter>
  )
}
