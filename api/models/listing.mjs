import mongoose from 'mongoose';

// const Number = require("mongoose-Number").loadType(mongoose);
const ListingsAndReviews = mongoose.model('listing',
  new mongoose.Schema({
  _id: String,
    access: String,
  accommodates: Number,
  address: {
    country: String,
    country_code: String,
    government_area: String,
    location: {
      coordinates: [Number],
      is_location_exact: Boolean
    },
    market: String,
    street: String,
    suburb: String
},
  amenities: [String],
  availability: {
    type: {
      availability_30: Number,
      availability_60: Number,
      availability_90: Number,
      availability_365: Number,
    }
  },
  bathrooms: mongoose.Decimal128,
  bed_type: String,
  bedrooms: Number,
  beds: Number,
  cancellation_policy: String,
  cleaning_fee: mongoose.Decimal128,
  description: String,
  extra_people: mongoose.Decimal128,
  first_review: Date,
  guests_included: mongoose.Decimal128,
  host: {
    host_about: String,
    host_has_profile_pic: Boolean,
    host_id: String,
    host_identity_verified: Boolean,
    host_is_superhost: Boolean,
    host_listings_count: Number,
    host_location: String,
    host_name: String,
    host_neighbourhood: String,
    host_picture_url: String,
    host_response_rate: Number,
    host_response_time: String,
    host_thumbnail_url: String,
    host_total_listings_count: Number,
    host_url: String,
    host_verifications: [String],

  },
  house_rules: String,
  images: {
    medium_url: String,
    picture_url: String,
    thumbnail_url: String,
    xl_picture_url: String
  },
  interaction: String,
  last_review: Date,
  last_scraped: Date,
  listing_url: String,
  maximum_nights: String,
  minimum_nights: String,
  monthly_price: { type: mongoose.Decimal128, required: false },
  name: String,
  neighborhood_overview: String,
  notes: String,
  number_of_reviews: Number,
  price: mongoose.Decimal128,
  property_type: String,
  review_scores: {
    review_scores_accuracy: {type: Number, required: false},
    review_scores_checkin: {type: Number, requied: false},
    review_scores_cleanliness: {type: Number, required: false},
    review_scores_communication: {type:Number, required: false},
    review_scores_location: {type: Number, required: false},
    review_scores_rating: {type: Number, required: false},
    review_scores_value: {type: Number, required: false} 
  },
  reviews: [{
    _id: String,
    comments: String,
    date: Date,
    listing_id: String,
    reviewer_id: String,
    reviewer_name: String
  }],
  reviews_per_month: Number,
  room_type: String,
  security_deposit: mongoose.Decimal128,
  space: String,
  summary: String,
  transit: String,
  weekly_price: { type: mongoose.Decimal128, required: false}
},
// 'ListingsAndReview'
))


export {ListingsAndReviews}