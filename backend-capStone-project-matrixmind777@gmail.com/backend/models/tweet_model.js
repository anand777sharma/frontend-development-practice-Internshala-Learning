const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const TweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    tweetedby: {
        type: ObjectId,
        ref: "UserModel"
    },
    likes: [
        {
            type: ObjectId,
            ref: "UserModel"
        }
    ],
    // comments: [
    //     {
    //         commentText: String,
    //         commentedBy: { type: ObjectId, ref: "UserModel" }
    //     }
    // ],
    retweetedby: [
        {
            type: ObjectId,
            ref: "UserModel"
        }
    ],
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    replies: [
        {
            type: ObjectId,
            ref: 'TweetModel',
        }
    ],

},
    { timestamps: true }
);

mongoose.model("TweetModel", TweetSchema);