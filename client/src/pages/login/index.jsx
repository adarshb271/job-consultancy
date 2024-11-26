import React, { useState } from 'react';
import axios from '../../utils/axois';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, useParams } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';

import { Input, Button } from 'antd';



import './login.css';

const Login = () => {
const navigate =useNavigate()


const [login, setLogin] = useState({
  email: '',
  password: '',
});

const onChange = (e, key) => {
  setLogin({ ...login, [key]: e.target.value });
};
const onLogin = async () => {
  try {
    const response = await axios.post('/user/loginuser', login);

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('id', response.data.id);

    toast.success('Login successful! ', {
      autoClose: 2000, 
    });

    setTimeout(() => navigate('/user/home'), 2000);
  } catch (e) {
    console.error('Email ID or Password is incorrect:', e);

    toast.error('Invalid email or password. Please try again.', {
      autoClose: 3000, 
    });
  }
};

// const onLogin = async () => {
//   try {
//     const response = await axios.post('/user/loginuser', login);

//     localStorage.setItem('token', response.data.token);
//     localStorage.setItem('id', response.data.id);

//     navigate('/');
//   } catch (e) {
//     console.log('Email id or Password is incorrect');
//     console.log(e);
//   }
// };

  return (
    // <div className="login-container">
    //   <h2>Login</h2>
    //   <form className="login-form" >
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button  onClick={onLogin} type="submit" className="btn login-btn">Login</button>
    //   </form>
    // </div>
    <div className="userbackgroundimage">
    <ToastContainer />
<h1>"The future depends on what you do today."</h1>

    <div className="userlogin">
      <h1> Login</h1>
      <div className="useremailcontainer">
        <label>Email</label>
        <Input
          onChange={e => onChange(e, 'email')}
          placeholder="please enter your email"
        />
      </div>
      <div className="userpasswordcontainer">
        <label> password</label>
        <Input type="password" onChange={e => onChange(e, 'password')} />
      </div>
      <Button className="userbutton" onClick={onLogin}>
        {' '}
        Login
      </Button>
      <div className="userparagraph">
        <p>
          you don't have an account ? <Link to="/signup">Sign up</Link>
        </p>
        <br />
        <p>
          <Link to="/user/forgotpassword"> forgotpassword ?</Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;
