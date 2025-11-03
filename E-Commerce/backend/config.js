const mongoose=require('mongoose');

const uri="mongodb://localhost:27017/PlannerDB";

async function connectDb(){
    try {
        await mongoose.connect(uri);
        console.log("MongoDb connected successfully");
    } catch (error) {
        console.log("Error while connecting DB");
    }
}
module.exports=connectDb;