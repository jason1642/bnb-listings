import express from 'express';
import mongoose from 'mongoose';
import {ListingsAndReviews as Listings} from '../models/listing.mjs';
import _ from 'lodash';
// Path : /api/airbnb/listings

const airbnbHomeRouter = express.Router();
 


airbnbHomeRouter.get('/all', async (req, res, next) => {

  const listings = await Listings.find({}).limit(30);
  console.log(listings);
  return res.send(listings)
  
})

// _.captialize() caps first letter in string then lowercases the rest

// Soley reliant on params to query info
// docs say query entries should be validated since users can put anything in url
airbnbHomeRouter.get('/query', async (req, res, next) => {
  // req.query returns object of params set in axios method
  // Having multiple query params will look for documents matching all their values together only
// =====
  // use for ...in to loop through query object - for (const item in items) { }
  // to get matching documents for each, then combine then into one array and filter duplicate _ids, maybe using lodash
  // =====
  const listings = await Listings.find(req.query).limit(5)
  console.log(listings)
  if (listings.length === 0) return res.status(404).send("cannot find matches")
  // Listings.find() returns an array even if empty, Listings.findOne() returns an object

  console.log('skipped over errors')
  return res.send(listings)

} )
 
 

 






export default airbnbHomeRouter;












// airbnbHomeRouter.get('/', async (req, res, next) => {
  
// })
// airbnbHomeRouter.get('/', async (req, res, next) => {
  
// })