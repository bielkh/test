import React, { useLocation, useState, useEffect } from 'react'

import Navbar from "./components/NavBar";

import { Outlet } from "react-router-dom";

import Footer from "../src/components/Footer";

import Slide from './components/Slide';

import ClipLoader from "react-spinners/ClipLoader";
  
import './App.css'



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
    setLoading(false)
  }, 1000)
  }, [])


  return (

    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      </div>

  )
}

export default App
