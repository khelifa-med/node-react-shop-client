import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navebar from './Components/1_Navbar/Navebar'
import Footer from './Components/3_Footer/Footer'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Order_complete from './Pages/Order_complete'
import ProductDetails from './Pages/ProductDetails'

function App() {
  const [order, setOrder] = useState(null)
  return (
    <Router>
      <div className="">
        <Navebar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/order-complete" element={<Order_complete order={order} />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
