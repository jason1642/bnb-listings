import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import {User } from '../models/user.mjs'
import Joi from 'joi';
import express from 'express';
const authRouter = express.Router(); 

// Use to login user, 
// path: /api/user/auth  - Possibly change to /auth/login
const loginSchema = Joi.object({
  username: Joi.string().min(4).max(50).trim().required(),
  password: Joi.string().min(5).max(255).trim().required()
})
authRouter.post('/', async (req, res) => {
  // First use mongoose schema with Joi validator to see if username and
  // password are valid input, not valid matching password
  const { error } = loginSchema.validate(req.body);
  if (error) {
    console.log(error)
    return res.status(400).send(error.details[0].message);
  };
 
  //  Now find the user by their username
  let user = await User.findOne({ username: req.body.username });

  if (!user) {
    console.log(req.body)

      return res.status(400).send('Incorrect username or password.');
  }

  // Then validate the Credentials in MongoDB match those provided in the request.
  // Will return false if password was not encrypted during creation despite matching.
  // Shall not accept matching unencrpyted password for security reasons.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  console.log(req.body, process.env.TOKEN_SECRET)

  if (!validPassword) return res.status(400).send('Incorrect email or password.');
    
  // If verified, return a jwt, and user id & username
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.send({ token, user: _.pick(user, ['_id', 'username']) });

});





authRouter.get('/verify', async(req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) res.status(403);
  
  jwt.verify(token, process.env.TOKEN_SECRET,
    async (err, user) => {
      err && res.status(403)
      await User.findOne({ _id: user._id }).then(user=>res.send(user))
      
    }  
  );
  
})


export default authRouter;