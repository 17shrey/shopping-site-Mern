const mongoose=require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        
        maxlength:150
    },
    description:{
        type:String, 
        required:true,
        maxlength:2000
    },
    price:{
        type:Number,
        trim:true,
        required:true,
        maxlength:32
    },
    imagepath:{
        type:String,
        trim:true,
        required:true,
        maxlength:150
    },
    category:{
        type:String,
        trim:true
    },
    quantity:{
        type:Number,
        default:0
    },
    
},{timestamps:true});

const Product = mongoose.model("product", productSchema);
module.exports = Product;