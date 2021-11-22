const mongoose=require('mongoose');

const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

require("dotenv").config();

const userSchema=mongoose.Schema({

    firstName: {
        type:String,
        required: 'First name can\'t be empty'
    },
    lastName:{ 
        type:String,
        required: 'Last name can\'t be empty'
    },
    email: {
        type:String,
        required:'Email can\'t be empty',
        unique:true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    saltSecret:String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("users.model.js hello");
    return emailRegex.test(val);
}, 'Invalid e-mail.');



// Events
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        console.log(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            console.log(err);
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    });
});

//methods
userSchema.methods.verifyPassword = function (password){
    return bcrypt.compareSync(password,this.password);
};

userSchema.methods.generateJwt = function(){
    console.log(" "+process.env.NODE_ENV);
    return jwt.sign({ _id:this.id},
        process.env.JWT_SECRET);
}

const userModel =  mongoose.model('Users',userSchema);

module.exports=userModel;