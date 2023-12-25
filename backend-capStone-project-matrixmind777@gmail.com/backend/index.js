const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const dotenv = ('dotenv');
const app = express();
// const PORT =5000;

require ('dotenv').config();
mongoose.connect(process.env.URL);
mongoose.connection.on('connected',()=>{
    console.log("db connected")
})
mongoose.connection.on('error',(error)=>{
    console.log("error")
})
require('./models/user_model')

app.use(cors());
app.use(express.json());

app.use(require('./routes/user_route'));

app.listen(process.env.PORT,()=>{
console.log(`Server started at port ${process.env.PORT}`);
});