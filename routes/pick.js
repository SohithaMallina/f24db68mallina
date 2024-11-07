const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Array of image file names
  const image_names = [
    'yellowrose.jpeg', 
    'veg.jpeg', 
    'badammilk.jpeg', 
    'baby.jpeg', 
    'moon.jpeg'
  ];

  res.render('randomitem', { title: 'A random item', image_names: image_names });
});

module.exports = router;