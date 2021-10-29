const mongoose=require('mongoose')

const homeSchema=mongoose.Schema({

})

const homeModel = mongoose.model('Home',homeSchema);

module.exports = homeModel;