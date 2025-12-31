// Import the mongoose library (used to connect Node.js with MongoDB)
const mongoose = require('mongoose');

// MongoDB connection URL
// 127.0.0.1 = localhost (your own machine)
// 27017 = default MongoDB port
// mydatabase = database name (auto-created if it doesn't exist)
const mongoURL = 'mongodb://127.0.0.1:27017/mydatabase';

// Connect Node.js application to MongoDB
// mongoose.connect() returns a Promise
mongoose
  .connect(mongoURL)
  .then(() => {
    // This runs when the connection is successful
    console.log('Connected to MongoDB server.');
  })
  .catch((err) => {
    // This runs if there is any connection error
    console.log('mongoDB connection error.', err);
  });

// Get the active database connection object
const db = mongoose.connection;

// Event listener: triggered when MongoDB disconnects
// (for example: MongoDB service stopped or network issue)
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server.');
});

// Export the database connection
// So it can be used in other files (like server.js)
module.exports = db;