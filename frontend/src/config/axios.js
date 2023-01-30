import axios from 'axios';

export const axiosClientInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
});
