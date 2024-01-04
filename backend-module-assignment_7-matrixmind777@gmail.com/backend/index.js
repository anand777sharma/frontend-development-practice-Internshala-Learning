const express= require('express');
const cors= require('cors');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');
dotenv.config();
const app= express();
app.use(cors());//to connect with Frontend
app.use(express.json());//middleware for JSON Parser

require("./connection/db");

const auth_controller=require('./routes/auth_routes');
 
app.use('/uploads',express.static('uploads'));
app.use('/api/auth',auth_controller);
app.use('/api/user',require('./routes/user_routes'));
app.use('/api/product',require('./routes/product_routes'));


app.listen(process.env.PORT,()=>{
    console.log("Server Running")
})