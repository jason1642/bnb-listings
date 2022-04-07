import { User, validateUser } from '../models/user.mjs';
import express from 'express';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import config from 'config';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { verifyUser } from '../middleware/verify-user.mjs'
import { ListingsAndReviews as Listings } from '../models/listing.mjs';
const userRouter = express.Router();
 
// ========================================
// ======== REGISTER/CREATE USER ==========
// ========================================
// path: '/api/user/create'
userRouter.post('/create', async (req, res) => {
  // First Validate The Request\
  const { error } = validateUser(req.body);
  if (error) {
      return res.status(400).send(error.details[0].message);
  }
 
  // Check if this user already exisits
  let user = await User.findOne({
    $or: [
      { username: req.body.username },
      { email: req.body.email }
    ]
  });

  if (user) {
      return res.status(400).send('That username or email is already taken.');
  } else {
      // Insert the new user if they do not exist yet
    user = new User(_.assign(_.pick(req.body, ['username', 'email', 'password']),
      { _id: new mongoose.Types.ObjectId() }));
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    
    await user.save();
    console.log("User created!")
    const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
    
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
  }
});


// Find one user
userRouter.get('/:id', async (req, res, next) => {
  if (!req.params.id) res.status(401).send('ID input is empty');
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    return res.status(400).send('User doesn\t exist');
  } else {
    res.send(_.pick(user, ['username', '_id', 'email']));
}

})



// Verify through middleware first 
userRouter.get('/account/:id', verifyUser, (req, res) => { 
  
  res.send("this is the response")
}
)



// CAN REMOVE LISTING IF ALREADY EXISTS
userRouter.post('/add-favorite/', async(req,res,next) => {
  // req : {listing_id or instance, user id }
  const user = await User.findOne({ _id: req.body._id })
  console.log(req.body)
  console.log(user)
  if (user == null) return res.status(404).res('User not found')

  const listing = await Listings.findOne({ _id: req.body.listing_id })
  if (listing == null) return res.status(404).res("listing not found")
  console.log(listing._id)
  const doesListingExist = user.favorites.findIndex(ele => ele === listing._id)
  console.log(doesListingExist, 'exists?')
  if (doesListingExist === -1) user.favorites.push(listing._id)
  else user.favorites.splice(doesListingExist, 1)




  user.save()

  res.send("Favorite added")
// 

})



userRouter.get('/get-all-favorites-data/:id', async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id })
  if (!user) return res.status(404).res('User not found')

  const favoritesList = await Listings.find({
    in$: {
      _id: user.favorites
    }
  })
  console.log(favoritesList);
  return res.status(201).send("testing")
})






export { userRouter };