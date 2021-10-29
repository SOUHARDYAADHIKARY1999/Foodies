const mongoose=require('mongoose')


const foodSchema=mongoose.Schema({

    foodName:String,
    foodType:String,
    foodPrice:String
})

const foodModel = mongoose.model('Foods',foodSchema);

module.exports = foodModel;