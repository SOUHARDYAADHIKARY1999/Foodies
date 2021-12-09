const mongoose=require('mongoose')

const wrapFoodSchema=mongoose.Schema({

    wrapFoodDivision:String,
    wrapFoodImageUrl:String,
    wrapFoodName:String,
    wrapFoodVeg:Boolean,
    wrapFoodPrice:String,
    wrapFoodDescription:String,
    wrapFoodRaiting:String
})

const wrapFoodModel = mongoose.model('WrapFoods',wrapFoodSchema);

module.exports = wrapFoodModel;