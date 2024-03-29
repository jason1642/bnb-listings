import express from 'express';
import cors from 'cors';
import connectDatabase from './database.mjs'
import 'dotenv/config';
import { userRouter } from './routes/users.mjs';
import config from 'config';
import authRouter from './routes/auth.mjs';
import airbnbHomeRouter from './routes/airbnb-search.mjs';
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Heroku dynamically sets port by itself
const port = process.env.PORT || 5050; 
 
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter); 
app.use('/api/user/auth', authRouter);
app.use('/api/airbnb/listings', airbnbHomeRouter);

 


 
 
console.log(process.env)

connectDatabase();






if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));

  app.get('/*', (req, res) => {
  console.log(path)
  console.log('path!!!!')
    console.log(__dirname)
    console.log(__filename)
    
  res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
    if (err) {
      res.status(500).send(__dirname)
    }
  })
})
}

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err)
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    error: err
  });});
  
  
  app.listen(port, () => console.log('listening on port ' + port));
