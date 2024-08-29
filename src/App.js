import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import Main from './Mycomponents/Main';
import Login from './Mycomponents/Login';
import Register from './Mycomponents/Register';
import Cart from './Mycomponents/Cart';
import Seller from './Mycomponents/Seller';
import Buynow from './Mycomponents/Buynow'; // Ensure this component exists


function App() {
  const location = useLocation();

  // List of routes where the Main section should not be displayed
  const hideMainRoutes = ['/login', '/register', '/cart', '/seller', '/buy-now'];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/buy-now/:productId" element={<Buynow />} />
        <Route path="/" element={<Main />} />
      </Routes>
      {!hideMainRoutes.includes(location.pathname) && <Main />}
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
