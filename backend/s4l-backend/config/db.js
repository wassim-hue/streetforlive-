const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the EXACT same case as the existing DB
    await mongoose.connect('mongodb://localhost:27017/S4L', { // <-- Match case
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;