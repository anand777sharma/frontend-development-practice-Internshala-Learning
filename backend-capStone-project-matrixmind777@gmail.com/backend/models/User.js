const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjybLjs5MZ1ekIyG18wL6QPZ6WAaAGPJmkmK8tUsJNCA&s"
    },
    location: {
        type: String,

    },
    dateOfBirth: {
        type: Date
    },
    followers: [
        {
            type: ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: ObjectId,
            ref: "User"
        }
    ],
}, 
{ timestamps: true }
);

module.exports =mongoose.model("User", userSchema);