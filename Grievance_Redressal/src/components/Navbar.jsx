import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="./download.png" className="logo"/>
        <h3>Unified Grievance Redressal Portal</h3>
      </div>
      <div className="links-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/RegisterPage" className="nav-link">Register</Link>
        <Link to="/Login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;