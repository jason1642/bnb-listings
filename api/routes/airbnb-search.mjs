import express from 'express';
// import mongoose from 'mongoose';
import {ListingsAndReviews as Listings} from '../models/listing.mjs';
// import _ from 'lodash';
// Path : /api/airbnb/listings

const airbnbHomeRouter = express.Router();
 


airbnbHomeRouter.get('/all', async (req, res, next) => {

  const listings = await Listings.find({}).limit(30);
  console.log(listings);
  return res.send(listings)
  
})

airbnbHomeRouter.get('/rooms/:_id', async (req, res, next) => {
  await Listings.findOne({ _id: req.params._id }).then(ele => {
    console.log(req.params._id)
    res.send(ele);
  }, err=> res.status(404).send("Cannot find match"))
})


// docs say query entries should be validated since users can put anything in url
airbnbHomeRouter.get('/query', async (req, res, next) => {
// Query one at a time, just insert req.query, handle params in front end
  console.log(req.query) 
  const listings = Object.keys(req.query).length > 0 && await Listings
    .find(req.query)
    .limit(100)
    // .select( ["address.country","property_type"])
  if (listings.length === 0) return res.status(404).send("cannot find matches")
  // Listings.find() returns an array even if empty, Listings.findOne() returns an object

  console.log('skipped over errors')
  return res.send(listings)

} ) 
 
 
  
 






export default airbnbHomeRouter;












airbnbHomeRouter.get('/areas/:name', async (req, res, next) => {
  await Listings.find({ "address.market": req.params.name }).limit(100).then(ele => {
    console.log(ele)
    res.send(ele);
  }, err=> res.status(404).send("Cannot find match"))
})






// airbnbHomeRouter.get('/', async (req, res, next) => {
  
// })