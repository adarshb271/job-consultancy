// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Userhome from './pages/userhome'
import UserSignup from './pages/signupuser';
import './App.css'

function App() {

  return (
   <Routes>


{/* <Route path="/home" element={Pages} /> */}
<Route path="/" element={<Home />} /> 
<Route path="/login" element={<Login/>} /> 
<Route path="/user/home" element={<Userhome/>} /> 
<Route path="/user/signup" element={<UserSignup/>} /> 



   </Routes>
  )
}

export default App
