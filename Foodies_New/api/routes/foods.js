var express = require('express');
const foodModel = require('../models/foods.model');
var router = express.Router();


/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/',(req,res)=>{
  foodModel.find((err,docs)=>{
    if(!err){
      res.send(docs);
    }
    else{
      console.log('Error in retrieving users'+JSON.stringify(err,undefined,2));
    }
  });
})


router.post('/',async(req,res)=>{
  const{foodName,foodType,foodPrice} = req.body;
  let foodSchema ={};
  foodSchema.foodName=foodName;
  foodSchema.foodType=foodType;
  foodSchema.foodPrice=foodPrice;

  let foodmodel =new foodModel(foodSchema);
  await foodmodel.save();
  res.json(foodmodel);
})

module.exports = router;