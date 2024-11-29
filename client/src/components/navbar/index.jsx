import React from 'react';
import './navbar.css';
import { Navigate, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  return(
    <div className="navbar">
        <div className="navmain">
<div className="logo">
<img src="" alt="" />

</div>
<div className="details">
<ul  onClick={()=>{
navigate(`/`)
} }>Home</ul>

{/* <ul  onClick={()=>{
navigate(`/login`)
}  }>Candidate</ul> */}

<ul onClick={()=>{
navigate(`/service`)
} }>Employer</ul>
<ul onClick={()=>{
navigate(`/adminlogin`)
} }>Admin</ul>


{/* <button className="btn btn-primary">Signup</button> */}
<button onClick={()=>{
navigate(`/login`)
} }  className="buttonlogin">Login</button>
<button onClick={()=>{
navigate(`/user/signup`)
} }  className="buttonregister">Register</button>

</div>


        </div>











    </div>
)
};

export default Navbar;
