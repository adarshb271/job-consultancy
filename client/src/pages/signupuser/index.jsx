


import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';

import axios from '../../utils/axios'; 
import './signupuser.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
  
    const [signup, setSignup] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobilenumber: '',
      gender: '',
      address: '',
      DOB: '',
    });
  
    const onChange = (e, key) => {
      setSignup({ ...signup, [key]: e.target.value });
    };


const onSignupBtn = async () => {
  setIsSubmitting(true);
  setError(null);

  try {
    console.log('Attempting Signup...');
    const response = await axios.post('/user/signupuser', signup);
    console.log('Signup successful:', response.data);
    
   
    toast.success('Signup successful! Please log in to continue.');

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
    <div className="user">
        <ToastContainer/>
      <div className="userSignup">
        <div className="signup-container">
          <h2>
            User Sign Up
            {/* {error && <p className="error">{error}</p>} */}
          </h2>
          
          {/* Form Fields */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First name"
              required
              onChange={e => onChange(e, 'firstname')}
            />
          </div>
          
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              required
              onChange={e => onChange(e, 'lastname')}
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={e => onChange(e, 'email')}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={e => onChange(e, 'password')}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              onChange={e => onChange(e, 'confirmPassword')}
            />
          </div>
          
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              onChange={e => onChange(e, 'mobilenumber')}
            />
          </div>
          
          <div className="form-group">
            <label>Gender</label>
            <select onChange={e => onChange(e, 'gender')} required>
              <option value="" disabled>Select Gender</option>
              {/* <option value="">Select Gender</option> */}

              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" required onChange={e => onChange(e, 'DOB')} />
          </div>
          
          <div className="form-group">
            <label>Address</label>
            <textarea
              placeholder="Address"
              onChange={e => onChange(e, 'address')}
            ></textarea>
          </div>
          
          <button onClick={onSignupBtn} className="signup-button">
            Sign Up
          </button>
        </div>
        <p>        Already have an account Please <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
