import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import Main from './Mycomponents/Main';
import Login from './Mycomponents/Login';
import Register from './Mycomponents/Register';
import About from './Mycomponents/About';
import Advertise from './Advertise';
import Gift from './Mycomponents/Gift';
import Help from './Help';
import Cart from './Mycomponents/Cart';
import Seller from './Mycomponents/Seller';
import Buynow from './Mycomponents/Buynow';

function App() {
  const location = useLocation();

  console.log("Current Path:", location.pathname); // Debugging

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/help" element={<Help />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/buy-now/:productId" element={<Buynow />} />
        {/* Display Main only when the path is '/' */}
        <Route path="/" element={<Main />} />
      </Routes>
      
      <Footer />
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
