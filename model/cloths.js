const mongoose = require("mongoose")

const clothsSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    Brand:{
        type:String,
        require:true
    },
    Size:{
        type:String,
        require:true
    },
    Price:{
        type:String,
        require:true
    },

});

const Cloths = mongoose.model("cloth",clothsSchema);
module.exports=Cloths;