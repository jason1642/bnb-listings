import express from 'express';
import jwt from 'jsonwebtoken';
import {User } from '../models/user.mjs'

const api = express();




export const verifyUser = api.use(async(req, res, next) => {
  
  
  


  await jwt.verify(req.body.token, process.env.TOKEN_SECRET,
    async (err, user) => {
      

   
      if (err) return res.status(403).send('invalid token')


      await User.findOne({ _id: user._id })
        .then(userRes => {
          console.log(userRes)
          req.user = userRes
          next()
      })
      
    }  
  );
  
})

