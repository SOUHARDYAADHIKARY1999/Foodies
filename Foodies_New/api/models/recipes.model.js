const mongoose=require('mongoose')

const recipeSchema=mongoose.Schema({

    recipeName:String,
    recipeTime:String
})

const recipeModel = mongoose.model('Foods',recipeSchema);

module.exports = recipeModel;