var express = require('express');
var router = express.Router();


const foodModel = require('../models/foods.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;