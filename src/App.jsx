import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navebar from './Components/1_Navbar/Navebar'
import Footer from './Components/3_Footer/Footer'
import Shop from './Pages/Shop'

function App() {

  return (
    <Router>
      <div className="">
        <Navebar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/products" element={<div>Products</div>} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
