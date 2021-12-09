const mongoose=require('mongoose')


const cartItemSchema=mongoose.Schema({

    cartItemVeg:Boolean,
    cartItemName:String,
    cartItemQuantity:Number,
    foodPrice:Number
})

const cartItemModel = mongoose.model('Cart-Items',cartItemSchema);

module.exports = cartItemModel;