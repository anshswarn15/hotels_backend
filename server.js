// Import Express framework
const express = require('express')
const app = express();

// Import MongoDB connection file (connects to database)
const db = require('./db');

// Import body-parser to read JSON data from request body
const bodyParser = require('body-parser');

// Import Mongoose models


// Middleware: converts incoming JSON into JS object (req.body)
app.use(bodyParser.json());


// ---------- BASIC ROUTE ----------
app.get('/', (req, res) => {
  res.send('Hello World!, this is my express server.')
});


const personRoutes = require('./routes/personRoutes')
app.use('/',personRoutes)

const menuitemsRouters = require('./routes/menuitemsRoutes')
app.use('/',menuitemsRouters)
// ---------- START SERVER ----------
app.listen(3000, () => {
  console.log("listening at port 3000");
});