var express = require('express');
var router = express.Router();

const recipeModel = require("../models/recipes.model");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/',(req,res)=>{
  recipeModel.find((err,docs)=>{
    if(!err){
      res.send(docs);
    }
    else{
      console.log('Error in retrieving users'+JSON.stringify(err,undefined,2));
    }
  });
}) 
router.post('/',async(req,res)=>{
  const{name,picture_url,api_id} = req.body;
  let recipeSchema ={};
  recipeSchema.name=name;
  recipeSchema.picture_url=picture_url;
  recipeSchema.api_id=api_id;

  let recipemodel =new recipeModel(recipeSchema);
  await recipemodel.save();
  res.json(recipemodel);
})


module.exports = router;