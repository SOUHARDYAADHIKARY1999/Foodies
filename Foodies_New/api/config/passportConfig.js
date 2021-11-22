const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const userModel = require('../models/users.model');

passport.use(
     new localStrategy({usernameField: 'email'},
        (username,password,done)=>{
            userModel.findOne({email:username},
                (err,user)=>{
                    if(err)
                        return done(err);
                    // unknown user
                    else if(!user)
                        return done(null,false,{message:'Email is not registered'});
                    // wrong passwordm
                    else if(!user.verifyPassword(password))
                        return done(null,false,{message:'Wrong password'});
                    //authentication succeded
                    else{
                        //console.log("kol");
                        return done(null,user);
                    }
                    
                });
        })
);