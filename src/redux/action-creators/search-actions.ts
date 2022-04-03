import axios from 'axios';

const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:5040' : 'http://localhost:5040';

const api = axios.create({
  baseURL: baseUrl,
});


export const 