import { products } from "./constants/data.js"
import Product from "./models/productSchema.js";

const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log('data sucessfully imported')
    }catch(error){
        console.log("error while using default data",error.message);
    }
}

export default DefaultData;