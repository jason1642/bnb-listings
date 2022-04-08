import axios from 'axios';

const baseUrl = process.env.Node_ENV === 'production' ? 'https://airbnb-home-listings.herokuapp.com' : 'http://localhost:5040';

const api = axios.create({
  baseURL: baseUrl,
});


export const 