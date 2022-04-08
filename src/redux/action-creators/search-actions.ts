import axios from 'axios';

const baseUrl = process.env.Node_ENV === 'production' ? 'https://listings-airbnb.herokuapp.com' : 'http://localhost:5040';

const api = axios.create({
  baseURL: baseUrl,
});


export const 