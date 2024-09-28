import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Kerala Gov</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/submit" className="nav-links">Submit Grievance</Link>
          </li>
          <li className="nav-item">
            <Link to="/track" className="nav-links">Track Grievance</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar