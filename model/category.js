const mongoose = require("mongoose");


const categorySChema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  }
});

 
const Category = mongoose.model("Category", categorySChema);
module.exports = Category;
