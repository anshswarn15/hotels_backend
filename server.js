// Import Express framework
const express = require('express')
const app = express();

require('dotenv').config();
const db = require('./db');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!, this is my express server.')
});


const personRoutes = require('./routes/personRoutes')
app.use('/',personRoutes)

const menuitemsRouters = require('./routes/menuitemsRoutes')
app.use('/',menuitemsRouters)

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log("listening at port 3000");
});