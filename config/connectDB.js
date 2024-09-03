const mongoose = require('mongoose');
const colors = require('colors');

//creating function to connect with database

const connectDB = async () => {
    try{
            await mongoose.connect(process.env.MONGODB_URI);
            console.log(`server runing on ${mongoose.connection.host}`.bgCyan.white);
    }catch(error){ 
        console.log(`${error}`.bgRed);
    }
}

module.exports = connectDB;