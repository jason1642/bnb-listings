import express from 'express';
const api = express();




export const verifyUser = api.use((req, res, next) => {
  
  const authHeader = req.headers.authorization;

  
  console.log(authHeader)
  next()
})

