var express = require('express');
var router = express.Router();

const cartItemModel=require('../models/cart-item.model');

router.get('/',(req,res)=>{
    cartItemModel.find((err,docs)=>{
      if(!err){
        res.send(docs);
      }
      else{
        console.log('Error in retrieving users'+JSON.stringify(err,undefined,2));
      }
    });
})

router.post('/',async(req,res)=>{
    const{veg,name,quantity,price} = req.body;
    let  cartItemSchema={};
    
    cartItemSchema.cartItemVeg=veg,
    cartItemSchema.cartItemName=name,
    cartItemSchema.cartItemQuantity=quantity,
    cartItemSchema.foodPrice=price

  
    let cartitemmodel =new cartItemModel(cartItemSchema);
    await cartitemmodel.save();
    res.json(cartitemmodel);
})

module.exports = router;