const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = mongoose.model("UserModel");
const protectedRoute =require("../middleware/protectedResource")
const { JWT_SECRET } = require('../config');

// get user by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id,'-password');

        if (!user) {
            return res.status(404).send({ message: "No User Found" });
        }

        res.status(200).send({ message: "User Found", user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error Occurred", error });
    }
});
// get all users 
router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find({} ,'-password');

        if (!users || users.length === 0) {
            return res.status(404).send({ message: "No Users Found" });
        }

        res.status(200).send({ message: "Users Found", users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error Occurred", error });
    }
});
// update user by id
router.put("/:id",protectedRoute, async (req,res)=>{
    const {id}= req.params;
    try {
        // const {name,username,password}=req.body;
        
        let user=await UserModel.findById(id);
        if(!user){
            return res.send({message:"No User registered to update"})
        }
        const resp = await UserModel.findByIdAndUpdate(id,req.body);

        res.status(201).send({message:"User Updated",resp})
    } catch (error) {
        console.log(error);
    }
});
// follow user 
router.put("/:id/follow", protectedRoute, (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        $push: { follow: req.user._id }
    }, {
        new: true // returns updated record
    }).populate("author", "_id name username")
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({ error: error });
            } else {
                res.json(result);
            }
        });
});
// unfollow user
router.put("/:id/unfollow", protectedRoute, (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        $pull: { follow: req.user._id }
    }, {
        new: true // returns updated record
    }).populate("author", "_id name username")
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({ error: error });
            } else {
                res.json(result);
            }
        });
});

module.exports = router;