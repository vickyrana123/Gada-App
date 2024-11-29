import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-dark text-light' style={styles.footer}>
      <ul style={styles.footerList}>
        <li style={styles.listItem}>
          <Link to="/About" style={styles.link}>About</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/Seller" style={styles.link}>Become a Seller</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/Advertise" style={styles.link}>Advertise</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/Gift" style={styles.link}>Gift Cards</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/Help" style={styles.link}>Help Center</Link>
        </li>
        <li style={styles.listItem}>
          <p style={styles.copyRight}>Copyright &copy; Gadaelectronics.com</p>
        </li>
      </ul>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#343a40', // Dark background
    color: '#ffffff', // Light text color
  },
  footerList: {
    display: 'flex',
    flexDirection: 'column',  // Force column layout on all screen sizes
    listStyle: 'none',
    padding: '0',
    margin: '0',
    alignItems: 'center', // Center the links horizontally
    justifyContent: 'center',
  },
  listItem: {
    margin: '10px 0', // Vertical spacing between items
    fontSize: '18px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
  },
  copyRight: {
    margin: '0',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

// Responsive styles using media queries
const mediaQueryStyles = {
  '@media (max-width: 768px)': {
    footer: {
      padding: '20px',
    },
    footerList: {
      flexDirection: 'column', // Ensure that links are displayed in a column on mobile
      alignItems: 'center', // Center align the items
    },
    listItem: {
      margin: '10px 0', // Reduced margin for mobile
      fontSize: '16px',
    },
  },
};

// Manually apply the media query styles
for (const query in mediaQueryStyles) {
  if (window.matchMedia(query).matches) {
    Object.assign(styles.footer, mediaQueryStyles[query].footer);
    Object.assign(styles.footerList, mediaQueryStyles[query].footerList);
    Object.assign(styles.listItem, mediaQueryStyles[query].listItem);
  }
}
