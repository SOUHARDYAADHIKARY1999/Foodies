const mongoose = require('mongoose');


const uri = 
    "mongodb+srv://souhardya1999:P%40sta0255@foodies-database.vsl7g.mongodb.net/Foodies-Database?retryWrites=true&w=majority";

const connectdb = async()=>{
    await mongoose.connect(uri,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        //useCreateIndex: true,
        //autoIndex: true
    });
    console.log('database connected...!');
}

module.exports = connectdb;