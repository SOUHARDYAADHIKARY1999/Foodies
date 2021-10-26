const mongoose=require('mongoose');

const userSchema=mongooseSchema({

    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    dob: String
    
});


const userModel =  mongoose.model('Users',userSchema);

module.exports=userModel;