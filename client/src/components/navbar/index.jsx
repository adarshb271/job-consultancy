

import React from 'react';
import './navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="navbar1">
      <div className="navmain1">
        <div className="logo">
          <h6>JOB  </h6><h5>BIZ</h5>
          <p>JOB Solution</p>
          <img src="" alt="" />
        </div>
        <div className="details">
          <ul className={isActive('/')} onClick={() => navigate(`/`)}>
           <h6>Home</h6> 
          </ul>
          <ul className={isActive('/employerhome')} onClick={() => navigate(`/employerhome`)}>
           <h6> Employer</h6>
          </ul>
          <ul className={isActive('/adminlogin')} onClick={() => navigate(`/adminlogin`)}>
           <h6>  Admin</h6>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
