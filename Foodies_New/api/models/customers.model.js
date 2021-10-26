const mongoose=require('mongoose');

const customerSchema=mongooseSchema({

    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    dob: String
});


const customerModel =  mongoose.model('Cusomers',customerSchema);

module.exports=customerModel;