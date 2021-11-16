const mongoose = require('mongoose')

const userModel=require('../models/users.model');

module.exports.register=(req,res,next)=>{
    var user=new userModel();
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.email=req.body.email;
    user.password=req.body.password;
    user.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else{
            if(err.code==11000)
                res.status(422).send(['Duplicate email address found.']);
            else
                return next(err);
        }
    })

}