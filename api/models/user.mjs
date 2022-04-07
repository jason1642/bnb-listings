import Joi from 'joi';
import mongoose from 'mongoose';

const User = mongoose.model('User', new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5, 
    maxlength: 1024
  },
  favorites: [{ type: String, ref: 'ListingsAndReviews' }],
  created_at: { type: Date },
  updated_at: { type: Date}
}));

const validateUser = user => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(50).trim().required(),
    email: Joi.string().min(5).max(255).trim().email(),
    password: Joi.string().min(5).max(255).trim().required()
  })
  return schema.validate(user);
};

export { User, validateUser };