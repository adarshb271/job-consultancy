// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
import Home from './pages/home'
import './App.css'

function App() {

  return (
   <Routes>


{/* <Route path="/home" element={Pages} /> */}
<Route path="/" element={<Home />} /> 



   </Routes>
  )
}

export default App
