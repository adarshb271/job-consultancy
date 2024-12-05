import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './adminlogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onLogin = async () => {
    try {
      const response = await axios.post('/admin/loginadmin', login);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      toast.success('Login successful! Redirecting to admin dashboard...');
      navigate('/adminhome');
    } catch (e) {
      console.log('Email id or Password is incorrect');
      console.log(e);

      toast.error('Login failed! Please check your email and password.');
    }
  };

  
  return (
    <div className="adminbackgroundimage">
      <ToastContainer />
      <Navbar />
      <div className="login">
        <h1>Admin Login</h1>
        <div className="emailcontainer">
          <label>Email</label>
          <Input
            onChange={e => onChange(e, 'email')}
            placeholder="Please enter your email"
          />
        </div>
        <div className="passwordcontainer">
          <label>Password</label>
          <Input type="password" onChange={e => onChange(e, 'password')} />
        </div>
        <Button className='adminlogin' onClick={onLogin}>Login</Button>
       
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
