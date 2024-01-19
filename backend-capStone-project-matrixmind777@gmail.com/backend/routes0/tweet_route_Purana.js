const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const TweetModel = mongoose.model("TweetModel");
const protectedRoute = require("../middleware/protectedResource");

// create tweet
router.post("/", protectedRoute, (req, res) => {
    const { description, location, image } = req.body;
    if (!description || !location ) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }
    req.user.password = undefined;
    const tweetObj = new TweetModel({ description: description, location: location, image: image, author: req.user });
    tweetObj.save()
        .then((newtweet) => {
            res.status(201).json({ tweet: newtweet });
        })
        .catch((error) => {
            console.log(error);
        })
});

// like tweet /api/tweet/:id/like
router.put("/:id/like", protectedRoute, (req, res) => {
    TweetModel.findByIdAndUpdate(req.body.tweetId, {
        $push: { likes: req.user._id }
    }, {
        new: true //returns updated record
    }).populate("author", "_id name username")
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({ error: error });
            } else {
                res.json(result);
            }
        })
});

// dislike tweet  /api/tweet/:id/dislike
router.put("/:id/dislike", protectedRoute, (req, res) => {
    TweetModel.findByIdAndUpdate(req.body.tweetId, {
        $pull: { likes: req.user._id }
    }, {
        new: true //returns updated record
    }).populate("author", "_id name username")
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({ error: error });
            } else {
                res.json(result);
            }
        })
});

//all users tweets
router.get("/alltweets", (req, res) => {
    TweetModel.find()
        .populate("author", "_id name username profileImg")
        .populate("comments.commentedBy", "_id name username")
        .then((dbtweets) => {
            res.status(200).json({ tweets: dbtweets })
        })
        .catch((error) => {
            console.log(error);
        })
});

//all tweets only from logged in user
router.get("/myalltweets", protectedRoute, (req, res) => {
    TweetModel.find({ author: req.user._id })
        .populate("author", "_id name username profileImg")
        .then((dbtweets) => {
            res.status(200).json({ tweets: dbtweets })
        })
        .catch((error) => {
            console.log(error);
        })
});


router.delete("/deletetweet/:tweetId", protectedRoute, (req, res) => {
    TweetModel.findOne({ _id: req.params.tweetId })
        .populate("author", "_id")
        .exec((error, tweetFound) => {
            if (error || !tweetFound) {
                return res.status(400).json({ error: "tweet does not exist" });
            }
            //check if the tweet author is same as loggedin user only then allow deletion
            if (tweetFound.author._id.toString() === req.user._id.toString()) {
                tweetFound.remove()
                    .then((data) => {
                        res.status(200).json({ result: data });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
});

// reply on tweet
router.put("/comment", protectedRoute, (req, res) => {

    const comment = { commentText: req.body.commentText, commentedBy: req.user._id }

    TweetModel.findByIdAndUpdate(req.body.tweetId, {
        $push: { comments: comment }
    }, {
        new: true //returns updated record
    }).populate("comments.commentedBy", "_id name username") //comment owner
        .populate("author", "_id name username")// tweet owner
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({ error: error });
            } else {
                res.json(result);
            }
        })
});

module.exports = router;
