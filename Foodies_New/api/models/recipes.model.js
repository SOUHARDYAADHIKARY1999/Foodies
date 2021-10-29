const mongoose=require('mongoose')

const recipeSchema=mongoose.Schema({

    recipeName:String,
    recipeTime:String
})

const recipeModel = mongoose.model('Recipes',recipeSchema);

module.exports = recipeModel;