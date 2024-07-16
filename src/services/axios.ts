import axios from 'axios';

const axsioInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axsioInstance;