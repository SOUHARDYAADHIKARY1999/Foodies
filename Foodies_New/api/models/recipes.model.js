const mongoose=require('mongoose')

const recipeSchema=mongoose.Schema({

    name:String,
    picture_url:String,
    api_id:String

})

const recipeModel = mongoose.model('Recipes',recipeSchema);

module.exports = recipeModel;