// import { checkToken } from '../../utils/localfunction'
// import { Outlet, Navigate } from 'react-router-dom';

// const PrivateRoute = props => {
//   return checkToken(props.role) ? (
//     <Outlet />
//   ) : (
//     <Navigate to={`${props.role}/adminlogin`} />
//   );
// };

// export default PrivateRoute;


import React from 'react';
import { Route,  } from 'react-router-dom';

// Function to check if the token is valid
const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // Get the token from localStorage (or sessionStorage, cookies)
  if (!token) {
    return false; // If there's no token, the user is not authenticated
  }
  try {
    // Optionally, you can decode the token and check expiration
    const decoded = jwt_decode(token);
    const expirationTime = decoded.exp * 1000; // Convert to milliseconds
    return Date.now() < expirationTime; // Check if the token is still valid
  } catch (error) {
    return false; // If decoding the token fails, consider it invalid
  }
};

// PrivateRoute Component
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} /> // If authenticated, render the component
        ) : (
          <Redirect to="/adminlogin" /> // If not authenticated, redirect to login page
        )
      }
    />
  );
};

export default PrivateRoute;
