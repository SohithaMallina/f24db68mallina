const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Array of image file names
  const image_names = [
    'yellowrose.jpg', 
    'veg.jpg', 
    'badammilk.jpg', 
    'baby.jpg', 
    'moon.jpg'
  ];

  res.render('randomitem', { title: 'A random item', image_names: image_names });
});

module.exports = router;