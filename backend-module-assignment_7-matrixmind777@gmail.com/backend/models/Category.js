const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const CategorySchema= new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
      },
},
{timestamps:true})

const Category= mongoose.model("Category",CategorySchema);
module.exports=Category;