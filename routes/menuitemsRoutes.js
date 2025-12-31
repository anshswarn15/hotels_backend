const express = require('express');
const router = express.Router();

const Menu = require('./../models/menu');


router.post('/menu', async (req, res) => {
  try {
    // Menu data from request
    const menudata = req.body;

    // Create new menu document
    const newMenu = new Menu(menudata);

    // Save menu into DB
    const menuresponse = await newMenu.save();

    console.log('menu data saved.');
    res.status(200).json(menuresponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error' });
  }
});

router.get('/menu', async (req, res) => {
  try {
    // Fetch all menu items
    const data = await Menu.find();

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;