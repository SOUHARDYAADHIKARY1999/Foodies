const mongoose=require('mongoose');

const userSchema=mongoose.Schema({

    firstName: String,
    lastName: String,
});

const userModel =  mongoose.model('Users',userSchema);

module.exports=userModel;