import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#004b87', padding: '10px 0', color: 'white', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', marginRight: 20, textDecoration: 'none' }}>Home</Link>
      <Link to="/submit-grievance" style={{ color: 'white', marginRight: 20, textDecoration: 'none' }}>Submit Grievance</Link>
      <Link to="/track-grievance" style={{ color: 'white', textDecoration: 'none' }}>Track Grievance</Link>
    </nav>
  );
}

export default Navbar;
