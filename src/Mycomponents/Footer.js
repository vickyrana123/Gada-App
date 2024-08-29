import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    backgroundColor: '#343a40', // Dark background
    color: '#ffffff' // Light text color
  };

  const listItemStyle = {
    margin: '40px 100px',
    fontSize: '20px'
  
  
  };

  return (
    <footer className='bg-dark text-light'
    style={{marginTop: '30px'}}>
      

      <ul style={footerStyle}>
        <li style={listItemStyle}>
          <Link to="/Seller" style={{ color: '#ffffff', textDecoration: 'none' }}>Become a Seller</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Advertise</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Gift Cards</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Help Center</Link>
        </li>
        <li style={listItemStyle}>
          <p style={{ margin: '0' }}>Copyright &copy; Gadaelectronics.com</p>
        </li>
        
      </ul>
    </footer>
  );
}
