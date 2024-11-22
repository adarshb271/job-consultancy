import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-logo">
      <h2>Admin Panel</h2>
    </div>
    <ul className="navbar-menu">

    <li>
        <a href="/">Home</a>
      </li>
      <li>
        
        <a href="/">Dashboard</a>
      </li>
      <li>
        <a href="/">Admin</a>
      </li>
      <li>
        <a href="/">Candicate</a>
      </li>
      
    </ul>
    <div className="navbar-buttons">
        <button className="btn register-btn">Register</button>
        <button className="btn login-btn">Login</button>
      </div>
  </div>
  );
};

export default Navbar;
