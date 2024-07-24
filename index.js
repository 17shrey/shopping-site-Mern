
const dotenv = require('dotenv')
const mongoose = require("mongoose"); 
const express = require("express"); 
app = express();

dotenv.config({path:'./config.env'});
const DB = process.env.DB; 
const PORT = process.env.PORT; 

app.use(express.json())
require('./db/dbconnection')
app.use(require('./router/coustomrouter'))
app.use(require('./router/product'))
app.use(require("./router/cloths"))



 
