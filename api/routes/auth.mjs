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
    return res.status(400).send('Incorrect username or password.');
  }
// console.log(user)
  // Then validate the Credentials in MongoDB match those provided in the request.
  // Will return false if password was not encrypted during creation despite matching.
  // Shall not accept matching unencrpyted password for security reasons.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  // console.log(req.body,validPassword)

  if (!validPassword) return res.status(400).send('Incorrect email or password.');
  // If verified, return a jwt, and user id & username
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  console.log('this is token' + token)
  res.header({'x-auth-token': token, 'authorization': `Bearer ${token}`}).send( _.assign({token: token},  _.pick(user, ['_id', 'email', 'username', 'created_at', 'updated_at', 'favorites']) ));
  // console.log(req.headers)
});

authRouter.post('/verify', async (req, res, next) => {
  // console.log(req.body)
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];
  // if (token == null) return res.status(403).send('no token found'); 
  try {
    jwt.verify(req.body.token, process.env.TOKEN_SECRET,
      async (err, user) => {
        // console.log(user)
        if (err) return res.status(403).send('invalid token')
        return await User.findOne({ _id: user._id }).then(userRes => res.send(userRes))
      }
    );
  } catch (err) {
    return res.status(403).send('Invalid token')
  }
})

export default authRouter;