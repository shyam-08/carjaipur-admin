import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn'
// import Dashboard from './Components/dashoard/Dashboard';
import { initializeApp } from 'firebase/app';
import Firebase from './config/Firebase';
import Dashboard from './Components/dashboard/Dashboard';
import Inventory from './Components/Pages/Inventory';
import Contactform from './Components/Pages/Contactform';
import SellData from './Components/Pages/SellData';
// import { AppBar } from '@mui/material';
// import MenuAppBar from './Components/dashoard/MenuAppBar';

function App() {

  return (
    <>
    {/* <Dashboard/> */}
    {/* <Inventory/> */}
    <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactform" element={<Contactform />} />
          <Route path="/selldata" element={<SellData/>} />
         

        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
