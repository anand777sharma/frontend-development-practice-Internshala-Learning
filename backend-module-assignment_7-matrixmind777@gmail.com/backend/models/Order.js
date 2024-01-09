const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
    customerid: {
        type: ObjectId,
        ref: "UserModel"
    },
    amount: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    del_status:{
        type:String,
        default:"pending"
    },
    products: [
        {
            type: ObjectId,
            ref: "Product",
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, { timestamps: true })

module.exports=mongoose.model('Order',OrderSchema);