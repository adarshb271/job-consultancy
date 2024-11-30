// 

import './admindashbox.css';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Admindashbox = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ firstname: "Guest", lastname: "", email: "" });

  const getAdminDetails = async () => {
    const adminID = localStorage.getItem('id');
    try {
      const response = await axios.get(`/admin/${adminID}`);
      setAdmin(response.data);
    } catch (error) {
      console.error("Error fetching admin details:", error);
    }
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="details">
          <div className="admincontent">
            <p>{`${admin.firstname} ${admin.lastname}`}</p>
            <p>{admin.email}</p>
          </div>
        </div>

        <nav className="contents">
          <p>
            <NavLink className="link" to="/adminhome">
              Dashboard
            </NavLink>
          </p>
          <p>
            <NavLink className="link" to="/postedjob">
              posted job
            </NavLink>
          </p>
          <p>
            <NavLink className="link" to="/candidatedetails">
             candidate applied
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

export default Admindashbox;
