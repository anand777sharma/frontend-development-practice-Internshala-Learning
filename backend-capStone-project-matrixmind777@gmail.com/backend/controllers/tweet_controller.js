const Tweet = require ("../models/Tweet");

const createtweet = async (req, res) => {
    try {
        const { content} = req.body;
        // const picture = req.file.path;
        if (!content) {
            return res.status(400).json({
                message: "please write something!!"
            })
        }
      
        const newTweet = new Tweet({ content:content,tweetedby:req.user });
        await newTweet.save();

        res.status(201).json({ message: "Tweet Added" })
    } catch (error) {
        console.log(error);
    }
}

const getalltweet = async (req, res) => {
    try {
        const data = await Tweet.find().populate("tweetedby");
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Error Occured" })
    }
}


module.exports = { createtweet,getalltweet }