import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mstory-api-server.herokuapp.com',
  withCredentials: true,
});
