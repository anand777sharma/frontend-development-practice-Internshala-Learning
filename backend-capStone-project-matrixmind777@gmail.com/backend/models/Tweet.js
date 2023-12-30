const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: ObjectId,
        ref: "UserModel",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    likes: [{
        type: ObjectId,
        ref: "UserModel",
    }],
    retweets: [{
        type: ObjectId,
        ref: "UserModel",
    }],
    replies: [{
        content: {
            type: String,
            required: true,
        },
        author: {
            type: ObjectId,
            ref: "UserModel",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    comments: [{
        content: {
            type: String,
            required: true,
        },
        author: {
            type: ObjectId,
            ref: "UserModel",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    retweetedBy: [{
        type: ObjectId,
        ref: "UserModel",
    }]
});

mongoose.model("TweetModel", tweetSchema);