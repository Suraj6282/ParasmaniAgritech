import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
    Link,
    useLocation,
  } from "react-router-dom";
import Header from './component/Header';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ProductPage from './Pages/ProductDetils';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Product from "./Pages/Product"
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import TermsAndCondition from "./Pages/TermsAndCondition"
import PrivacyPolicy from "./Pages/PrivacyPolicy"

const App = () => {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/Productsdetails' element={<ProductPage/>}/>
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/terms" element={<TermsAndCondition/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
     </Routes>
    </Router>
  )
}

export default App