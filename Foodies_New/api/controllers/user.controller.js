const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const { sendMsg } = require("../msg/whatsapp");

const userModel=require('../models/users.model');
const { use } = require('passport');

//const User =mongoose.model('Users');

module.exports.register=(req,res,next)=>{
    var user=new userModel();
    user.phoneNumber=req.body.phoneNumber;
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.email=req.body.email;
    user.password=req.body.password;
    user.admin=req.body.admin;
    user.save(async(err,doc)=>{
        if(!err){
            //console.log(doc);
            //console.log(err);
            res.send(doc);
            const message = `Welcome ${req.body.firstName} ${req.body.lastName}! Welcome to Foodies , Continue eating with delicacy!`;
            await sendMsg("+918910507749", message);
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
    passport.authenticate('local',async(err,user,info)=>{
        
        // error from passport middleware
        if(err){ 
            return res.status(400).json(err); 
        }
        // registered user
        else if(user){
            console.log("registered user");
            console.log(user.phoneNumber);
            const message = `Welcome ${req.body.firstName} ${req.body.lastName}! Welcome to Foodies , Continue eating with delicacy!`;
            await sendMsg(user.phoneNumber, message);
            console.log("first");
            return res.status(200).json({"token":user.generateJwt()});
        }
        // unknown user or password
        else{
            console.log("ko");
            return res.status(404).json(info);
        }
    })(req,res);
}

module.exports.userProfile = (req,res,next)=>{
    userModel.findOne({_id:req._id},
        (err,user)=>{
            if(!user){
                console.log("pingi");
                return res.status(404).json({ status: false, message: 'User record not found.' });
            }
            else
                return res.status(200).json({ status: true, user : _.pick(user,['firstName','lastName','email']) });
        });
}