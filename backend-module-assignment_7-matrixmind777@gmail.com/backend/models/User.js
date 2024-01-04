const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const UserSchema= new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    Username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

},
{timestamps:true})

const UserModel= mongoose.model("UserModel",UserSchema);
module.exports=UserModel;