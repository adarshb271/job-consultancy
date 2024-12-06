import React, { useState } from 'react';
import axios from '../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './reset.css'

const ResetPassword = () => {
  const [token, setToken] = useState(''); // To manually input token
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    const trimmedToken = token.trim(); // Remove spaces or invalid characters

    if (!trimmedToken) {
      toast.error('Token is required.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/admin/reset/${trimmedToken}`,
        {
          password,
          confirmpassword: confirmPassword,
        }
      );

      if (response.data.message === 'Password reset successfully.') {
        toast.success('Password reset successfully! Redirecting...');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Invalid token or error resetting password.');
    }
  };

  return (
    <div className="resetmain">
    <div className="resetPassword">
        
      <ToastContainer />
      <h2>Reset Password</h2>
      <div className="inputGroup">
        <label htmlFor="token">Token:</label>
        <input
          id="token"
          type="text"
          placeholder="Enter your reset token"
          onChange={(e) => setToken(e.target.value)}
          value={token}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">New Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <button className="btn" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
    </div>
  );
};

export default ResetPassword;




