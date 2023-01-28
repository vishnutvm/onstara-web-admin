import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import mongoDB from './config/db.js';
const app = express();
dotenv.config();

// Use cors middleware to handle cross-origin resource sharing
app.use(cors());

// Use body-parser middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use morgan middleware to log incoming HTTP requests
app.use(morgan('dev'));

// Use the routes defined in routes/index.js
// app.use('/', routes);

const PORT = process.env.PORT || 5000;

// starting db, starting server
try {
  mongoDB().then(() => {
    app.listen(PORT, console.log(`App is running on port ${PORT}`));
  });
} catch (err) {
  console.log(err);
}
