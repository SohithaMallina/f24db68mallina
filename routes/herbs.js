var express = require('express');
var router = express.Router();

/* GET herbs */
router.get('/', function(req, res, next) {
  res.render('herbs');
});

module.exports = router;
