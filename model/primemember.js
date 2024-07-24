const mongoose = require("mongoose");


const primeuserSChema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    cpassword: {
        type: String,
        require: true,
    }

});



const Prime = mongoose.model('prime',primeuserSChema)
module.exports = Prime;