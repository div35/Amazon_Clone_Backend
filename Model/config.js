const mongoose = require("mongoose");
const {db} = require("./../credential");

const dbConnect = async() => {
    try{
        await mongoose.connect(db);
        console.log("DB is connected");
    }catch(err){
        console.log(err);
    }
    
}

module.exports = dbConnect;

