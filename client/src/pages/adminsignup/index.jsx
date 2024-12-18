import "./adminsignup.css"

import Adminnavbar from "../../components/adminnavbar";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../../utils/axios'; // Ensure axios is set up correctly
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [signup, setSignup] = useState({
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e, key) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  const onSignupBtn = async () => {
    setIsSubmitting(true);
    setError(null);

    if (signup.password !== signup.confirmPassword) {
      toast.error('Passwords do not match!');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Attempting Admin Signup...');
      const response = await axios.post('/admin/signup', signup); 
      console.log('Signup successful:', response.data);

      
      toast.success('Admin Signup successful! Please log in to continue.');
      navigate('/login'); 
    } catch (e) {
      console.log('Signup failed:', e.response ? e.response.data : e.message);
      toast.error('Signup failed. Please check your details and try again.');
      setError('Signup failed. Please check your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin5">
      <ToastContainer />
      <div className="signupadm">
      <Adminnavbar/>
      <div className="adminSignup">
     
        <div className="signup-container">
          <br />
          <br />
          <h2>Sign Up</h2>

          {/* Form Fields */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First name"
              required
              onChange={(e) => onChange(e, 'firstname')}
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => onChange(e, 'email')}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => onChange(e, 'password')}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => onChange(e, 'confirmPassword')}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={onSignupBtn}
            className="signup-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>

        {/* <p>
          Already have an account? Please{' '}
          <Link to="/login">Login</Link>
        </p> */}
      </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
