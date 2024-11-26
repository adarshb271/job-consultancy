import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 9900,
  headers: `Bearer ${localStorage.getItem('token')}`,
});

export default instance;
