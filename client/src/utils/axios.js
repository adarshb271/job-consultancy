// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:8000',
//   timeout: 9900,
//   headers: `Bearer ${localStorage.getItem('token')}`,
// });

// export default instance;


import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // Update this to match your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
