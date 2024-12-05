

import React from 'react';
import './navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="navbar">
      <div className="navmain">
        <div className="logo">
          <h6>JOBBIZ</h6>
          <p>JOB Solution</p>
          <img src="" alt="" />
        </div>
        <div className="details">
          <ul className={isActive('/')} onClick={() => navigate(`/`)}>
            Home
          </ul>
          <ul className={isActive('/employerhome')} onClick={() => navigate(`/employerhome`)}>
            Employer
          </ul>
          <ul className={isActive('/adminlogin')} onClick={() => navigate(`/adminlogin`)}>
            Admin
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
