import React from 'react'
import Home from './pages/Home'
import SignIn  from './pages/SignIn'
import Profile from './pages/Profile'
import About  from './pages/About'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route  path="/" element={<Home/>}/>
   <Route  path="/SignIn" element={<SignIn/>}/>
   <Route  path="/Profile" element={<Profile/>}/>
   <Route  path="/about" element={<About/>}/>
   <Route path="/sing-up" element={<SignUp/>} />
   </Routes>
   </BrowserRouter>
  )
}
