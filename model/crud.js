const mongoose= require("mongoose");

const crudSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    adhar_no:{
        type:String,
        require:true
    }
});

const Crud = mongoose.model("CRUD",crudSchema);
module.exports = Crud