import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navebar from './Components/1_Navbar/Navebar'

function App() {

  return (
    <Router>
      <div className="">
        <Navebar />
        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/products" element={<div>Products</div>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
