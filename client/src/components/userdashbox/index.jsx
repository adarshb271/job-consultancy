// 

import './userdashbox.css';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Userdashbox = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstname: "Guest", lastname: "", email: "" });

  const getUserDetails = async () => {
    const userID = localStorage.getItem('id');
    try {
      const response = await axios.get(`/user/${userID}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/login');
  };

  return (
    <div className="user-dashboard">
      <aside className="sidebar">
        <div className="details">
          <div className="usercontent">
            <p>{`${user.firstname} ${user.lastname}`}</p>
            <p>{user.email}</p>
          </div>
        </div>

        <nav className="contents">
          <p>
            <NavLink className="link" to="/user/home">
              Dashboard
            </NavLink>
          </p>
          <p>
            <NavLink className="link" to="/user/home">
              Search a job
            </NavLink>
          </p>
          <p>
            <NavLink className="link" to="/user/applicant">
              My Applications
            </NavLink>
          </p>
          <p>
            <NavLink className="link" to="/user/home">
              feedback
            </NavLink>
          </p>
          <p className="logout" onClick={logout}>
            Logout
          </p>
        </nav>
      </aside>
      {/* <main className="main-content">
        <h1>Welcome, {user.firstname || "User"}!</h1>
      </main> */}
    </div>
  );
};

export default Userdashbox;
