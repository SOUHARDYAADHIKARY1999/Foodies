const mongoose=require('mongoose');

const userSchema=mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean
});

const userModel =  mongoose.model('Users',userSchema);

module.exports=userModel;