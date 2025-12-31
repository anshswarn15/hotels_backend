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

//comment
router.get('/menu/:tasteType', async (req, res) => {
  try {
    // Read URL parameter
    const tasteType = req.params.tasteType;

    // Validate allowed work types
    if (
      tasteType === 'Sweet' ||
      tasteType === 'Spicy' ||
      taste === 'Sour'
    ) {
      // Find persons with matching work field
      const response = await Menu.find({ taste: tasteType });

      console.log('response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Invalid taste Type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;