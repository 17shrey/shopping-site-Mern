const dotenv = require('dotenv')
const mongoose = require("mongoose"); 
const express = require("express"); 
app = express();

dotenv.config({path:'./config.env'});
const DB = process.env.DB; 
const PORT = process.env.PORT; 
app.use(express.json())

mongoose.connect(DB, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => {
  console.log("Connected successfully.");
}).catch((err) => {
  console.log('Unable to connect');
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} Port. You can check same on browser.`);
});

  
 