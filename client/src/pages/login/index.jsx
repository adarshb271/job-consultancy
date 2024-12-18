// import React, { useState } from 'react';
// import axios from '../../utils/axios';
// import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css'
// import { useNavigate, useParams } from 'react-router-dom';
//  import { ToastContainer, toast } from 'react-toastify';

// import { Input, Button } from 'antd';


// import './login.css';

// const Login = () => {
// const navigate =useNavigate()


// const [login, setLogin] = useState({
//   email: '',
//   password: '',
// });

// const onChange = (e, key) => {
//   setLogin({ ...login, [key]: e.target.value });
// };
// const onLogin = async () => {
//   try {
//     const response = await axios.post('/user/loginuser', login);

//     localStorage.setItem('token', response.data.token);
//     localStorage.setItem('id', response.data.id);

//     toast.success('Login successful! ', {
//       autoClose: 2000, 
//     });

//     setTimeout(() => navigate('/user/home'), 2000);
//   } catch (e) {
//     console.error('Email ID or Password is incorrect:', e);

//     toast.error('Invalid email or password. Please try again.', {
//       autoClose: 3000, 
//     });
//   }
// };



//   return (

//     <div className="userbackgroundimage">
      
//     <ToastContainer />
// <h1>"The future depends on what you do today."</h1>

//     <div className="userlogin">
//       <h1> Login</h1>
//       <div className="useremailcontainer">
//         <label>Email</label>
//         <Input
//           onChange={e => onChange(e, 'email')}
//           placeholder="please enter your email"
//         />
//       </div>
//       <div className="userpasswordcontainer">
//         <label> password</label>
//         <Input type="password" onChange={e => onChange(e, 'password')} />
//       </div>
//       <Button className="userbutton" onClick={onLogin}>
//         {' '}
//         Login
//       </Button>
//       <div className="userparagraph">
//         <p>
//           you don't have an account ? <Link to="/user/signup">Sign up</Link>
//         </p>
//         <br />
//         <p>
//           <Link to="/user/forgotpassword"> forgotpassword ?</Link>
//         </p>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Login;
