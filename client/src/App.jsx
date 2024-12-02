// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Userhome from './pages/userhome'
import UserSignup from './pages/signupuser';
import Adminhome from './pages/adminhome';
import Adminlogin from './pages/adminlogin';
import Postedjob from './pages/postedjobs';
import Application from './pages/applicationform';
import Candidatedetails from './pages/candidatedetails'
import Postjob from './pages/post a job';
import './App.css'

function App() {

  return (
   <Routes>


{/* <Route path="/home" element={Pages} /> */}
<Route path="/" element={<Home />} /> 
<Route path="/login" element={<Login/>} /> 
<Route path="/user/home" element={<Userhome/>} /> 
<Route path="/user/signup" element={<UserSignup/>} /> 
<Route path="/adminlogin" element={<Adminlogin/>} /> 
<Route path="/adminhome" element={<Adminhome/>} /> 
<Route path="/postedjob" element={<Postedjob/>} /> 
<Route path="/postjob" element={<Postjob/>} /> 

<Route path="/candidatedetails" element={<Candidatedetails/>} /> 


   </Routes>
  )
}

export default App
