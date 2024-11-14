var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var herb_controller = require('../controllers/herb');
const herbController = require('../controllers/herb'); 
// API ROUTE
// GET resources base.
router.get('/', api_controller.api);

// HERB ROUTES
// POST request for creating a Herb.
router.post('/herbs', herb_controller.herb_create_post);

// DELETE request to delete Herb.
router.delete('/herbs/:id', herb_controller.herb_delete);

// PUT request to update Herb.
router.put('/herbs/:id', herb_controller.herb_update_put);

// GET request for one Herb.
router.get('/herbs/:id', herb_controller.herb_detail);

// GET request for list of all Herb items.
router.get('/herbs', herb_controller.herb_list);

module.exports = router;