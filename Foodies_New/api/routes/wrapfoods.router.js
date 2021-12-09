var express = require('express');
var router = express.Router();

const wrapFoodModel =require("../models/wrap-food.model");

router.get('/',(req,res)=>{
    wrapFoodModel.find((err,docs)=>{
      if(!err){
        res.send(docs);
      }
      else{
        console.log('Error in retrieving users'+JSON.stringify(err,undefined,2));
      }
    });
  })

router.get('/:id', (req, res)=>{
  wrapFoodModel.findById(req.params.id, (err, doc) => {
    if (!err) { 
      res.send(doc); 
    }
    else { 
      console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); 
    }
  });
})

router.post('/',async(req,res)=>{
    const{division,img_url,name,veg,price,description,raiting} = req.body;
    let wrapFoodSchema ={};
    wrapFoodSchema.wrapFoodDivision=division;
    wrapFoodSchema.wrapFoodImageUrl=img_url,
    wrapFoodSchema.wrapFoodName=name,
    wrapFoodSchema.wrapFoodVeg=veg,
    wrapFoodSchema.wrapFoodPrice=price,
    wrapFoodSchema.wrapFoodDescription=description,
    wrapFoodSchema.wrapFoodRaiting=raiting
  
    let wrapfoodmodel =new wrapFoodModel(wrapFoodSchema);
    await wrapfoodmodel.save();
    res.json(wrapfoodmodel);
})

router.put('/:id',(req, res)=>{
  var food={
    wrapFoodDivision:req.body.division,
    wrapFoodImageUrl:req.body.img_url,
    wrapFoodName:req.body.name,
    wrapFoodVeg:req.body.veg,
    wrapFoodPrice:req.body.price,
    wrapFoodDescription:req.body.description,
    wrapFoodRaiting:req.body.raiting
  }
  wrapFoodModel.findByIdAndUpdate(req.params.id, { $set: food }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Wrap Food Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  wrapFoodModel.findByIdAndRemove(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Wrap Food Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;