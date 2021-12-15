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
    const{productId,cartItemVeg,cartItemName,cartItemQuantity,foodPrice} = req.body;
    let  cartItemSchema={};
    cartItemSchema.productId=productId,
    cartItemSchema.cartItemVeg=cartItemVeg,
    cartItemSchema.cartItemName=cartItemName,
    cartItemSchema.cartItemQuantity=cartItemQuantity,
    cartItemSchema.foodPrice=foodPrice
    console.log(cartItemSchema);
    let cartitemmodel =new cartItemModel(cartItemSchema);
    await cartitemmodel.save();
    res.json(cartitemmodel);
})

router.put('/:id',(req, res)=>{
  var cart_item={
    productId:req.body.productId,
    cartItemVeg:req.body.cartItemVeg,
    cartItemName:req.body.cartItemName,
    cartItemQuantity:req.body.cartItemQuantity,
    foodPrice:req.body.foodPrice,
  }
  cartItemModel.findByIdAndUpdate(req.params.id, { $set: cart_item }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Cart Update :' + JSON.stringify(err, undefined, 2)); }
  });
});
router.delete('/:id', (req, res) => {
  cartItemModel.findByIdAndRemove(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Cart Item Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;