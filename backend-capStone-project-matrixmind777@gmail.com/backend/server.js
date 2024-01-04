const express = require('express');
// const PORT = 4000;
const app = express();
const dotenv = ('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

global.__basedir = __dirname;
require ('dotenv').config();
mongoose.connect(process.env.URL);
mongoose.connection.on('connected',()=>{
    console.log("db connected")
})
mongoose.connection.on('error',(error)=>{
    console.log("error")
})
require('./models/user_model');
require('./models/tweet_model');

app.use(cors());
app.use(express.json());


app.use('/api/auth',require('./routes/auth_route'));
app.use('/api/user',require('./routes/user_route'));
app.use('/api/tweet',require('./routes/tweet_route'));
app.use(require('./routes/file_route'));

app.listen(process.env.PORT, () => {
    console.log("Server started");
});