const mongoose=require('mongoose');

const bcrypt =require('bcryptjs');

const userSchema=mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    saltSecret:String,
});


// Events
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    });
});

const userModel =  mongoose.model('Users',userSchema);

module.exports=userModel;