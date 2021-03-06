var express = require('express');
var router = express.Router();
const { sendMsg } = require("../msg/whatsapp");

var objectId = require('mongoose').Types.ObjectId;

const userModel=require('../models/users.model');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

const mongoose = require('mongoose');

router.get('/',(req,res)=>{
  userModel.find((err,docs)=>{
    if(!err){
      res.send(docs);
    }
    else{
      console.log('Error in retrieving users'+JSON.stringify(err,undefined,2));
    }
  });
})

router.get('/:id',(req,res)=>{
  
  if(!objectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  userModel.findById(req.params.id,(err,doc)=>{
    if(!err){res.send(doc)}
    else{console.log('Error in retrieving users'+JSON.stringify(err,undefined,2));
    }
  })

})

router.post('/',async (req,res)=>{
  //the parameter to be passed in the api
  const{firstName,lastName,email,password,saltSecret} = req.body;
  let userSchema = {};
  userSchema.firstName=firstName;
  userSchema.lastName=lastName;
  userSchema.email=email;
  userSchema.password=password;
  userSchema.saltSecret=saltSecret;

  let usermodel = new userModel(userSchema);
  await usermodel.save();
  res.json(usermodel);
})


module.exports = router;
