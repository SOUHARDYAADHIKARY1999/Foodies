const mongoose=require('mongoose');

const paymentSchema=mongooseSchema({

    paymentDate: Date,
    paymentMethod: String
});


const paymentModel =  mongoose.model('Cusomers',paymentSchema);

module.exports=paymentModel;