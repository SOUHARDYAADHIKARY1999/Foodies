const mongoose = require('mongoose');


const uri = 
    "mongodb+srv://souhardya1999:password@foodies-database.vsl7g.mongodb.net/Foodies-Database?retryWrites=true&w=majority";

const connectdb = async()=>{
    await mongoose.connect(uri,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('database connected...!');
}

module.exports = connectdb;