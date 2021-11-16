var express = require('express');
var router = express.Router();

const ctrlUser=require('../controllers/user.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',ctrlUser.register);

module.exports = router;
