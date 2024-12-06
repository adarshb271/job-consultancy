import './forgotpassword.css'


import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/admin/forgotpassword', { email });
      toast.success(response.data.message);
      navigate('/resetpassword/admin'); // Redirect to login page after email is sent
    } catch (e) {
      console.error('Error:', e);
      toast.error(e.response ? e.response.data.message : 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return ( 
    <div className="forgotpassmain">
   
    <div className='forgotpassword'>
    
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={onForgotPassword} disabled={loading}>
        {loading ? 'Sending...' : 'Send Reset Link'}
      </button>
    </div>
    </div>
  );
};

export default ForgotPassword;
