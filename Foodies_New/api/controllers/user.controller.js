const mongoose = require('mongoose');
const passport = require('passport');

const userModel=require('../models/users.model');

//const User =mongoose.model('Users');

module.exports.register=(req,res,next)=>{
    var user=new userModel();
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.email=req.body.email;
    user.password=req.body.password;
    user.save((err,doc)=>{
        if(!err){
            //console.log(doc);
            //console.log(err);
            res.send(doc);
            //console.log("pingy");
        }
        else{
            if(err.code==11000){
                res.status(422).send(['Duplicate email address found.']);
                //console.log("pingy1");
            }
            else{
                //console.log("pingy2");
                return next(err); 
            }
        }
    })

}

module.exports.authenticate=(req, res, next) =>{
    // call for passport authentication
    passport.authenticate('local',(err,user,info)=>{
        
        // error from passport middleware
        if(err){ 
            return res.status(400).json(err); 
        }
        // registered user
        else if(user){
            console.log("registered user");
            return res.status(200).json({"token":user.generateJwt()});
        }
        // unknown user or password
        else{
            return res.status(404).json(info);
        }
    })(req,res);
}