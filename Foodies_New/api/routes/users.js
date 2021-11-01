var express = require('express');
var router = express.Router();


const userModel=require('../models/users.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const mongoose = require('mongoose');

router.post('/',async (req,res)=>{
  const{firstName,lastName} = req.body;
  let userSchema = {};
  userSchema.firstName=firstName;
  userSchema.lastName=lastName;
  let usermodel = new userModel(userSchema);
  await usermodel.save();
  res.json(usermodel);
})

module.exports = router;
