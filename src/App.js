import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import Main from './Mycomponents/Main';
import Login from './Mycomponents/Login';
import Register from './Mycomponents/Register';
import Cart from './Mycomponents/Cart';
import Seller from './Mycomponents/Seller';

function App() {
  const location = useLocation();

  // List of routes where the Main section should not be displayed
  const hideMainRoutes = ['/login', '/register', '/cart', '/seller'];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
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
