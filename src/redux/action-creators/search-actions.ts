import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://reactbnb-listings.herokuapp.com' : 'http://localhost:5040';

const api = axios.create({
  baseURL: baseUrl,
});


// export const 