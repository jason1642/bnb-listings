import mongoose from 'mongoose';
import 'dotenv/config';


const connectDatabase = () => {

  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@portfolio-website.halgu.mongodb.net/sample_airbnb?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      if (!err) return console.log("db connected");
      else return console.log("db error");
    
    }
  )
};



export default connectDatabase;