const mongoose= require("mongoose")

const genderSchema = new mongoose.Schema ({
    Name:{
        type:String,
        require:true
    }
});

const Gender = mongoose.model("clothcats",genderSchema);
module.exports=Gender;

