
const express = require('express');
const router = express.Router();

const results = [
  {herb_name: 'Basil', description: 'A fragrant herb used in Italian cuisine', uses: 'Used in cooking, teas, and as garnish' },
  {herb_name: 'Mint', description: 'A cooling herb commonly used for its medicinal properties', uses: 'Used for digestive problems and skin care' },
  {herb_name: 'Rosemary', description: 'A woody herb known for its strong aroma', uses: 'Used in roasting meats, flavoring soups, and in aromatherapy' }
];

router.get('/', (req, res) => {
  res.render('herbs', { 
    title: 'Herbs Search Results', 
    results: results  
  });
});

module.exports = router;

