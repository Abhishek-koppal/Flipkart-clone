import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const mongoURI=`mongodb+srv://${username}:${password}@flipkart-web.zvagc8r.mongodb.net/?retryWrites=true`;
    try{
        await mongoose.connect(mongoURI,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("connected to database sucessfully")
    }catch(error){
        console.log("error connectiong database",error.message);
    }
}

export default Connection;