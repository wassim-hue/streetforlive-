const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
// Optional: Security and rate limiting
 const helmet = require('helmet');
 const rateLimit = require('express-rate-limit');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
 app.use(helmet()); // Uncomment to use Helmet
 app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Uncomment to enable rate limiting

 app.use('/api/auth', require('./routes/authRoutes'));
 app.use('/api/users', require('./routes/userRoutes'));
 app.use('/api/posts', require('./routes/postRoutes'));
 app.use('/api/comments', require('./routes/commentRoutes.js'));


// Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

module.exports = app;
 