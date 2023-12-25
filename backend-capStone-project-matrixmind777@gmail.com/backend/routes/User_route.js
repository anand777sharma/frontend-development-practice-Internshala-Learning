const express = require('express');
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");
require ('dotenv').config();


router.post("/signup", (req, res) => {
    const { fullName, email, password, profileImg } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "one or more fields required empty" })
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (userInDB) {
                return res.status(500).json({ error: "the user with this email already regestered" })
            }
            bcryptjs.hash(password, 16).then((hashedPassword) => {
                const user = new UserModel({ fullName, email, password: hashedPassword, profileImg });
                user.save()
                    .then((newUser) => {
                        res.status(201).json({ result: "user register successful" })
                    }).catch((err) => {
                        console.log(err);
                    })
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "one or more fields required empty" })
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (!userInDB) {
                return res.status(401).json({ error: "invadid user id password" })
            }
            bcryptjs.compare(password, userInDB.password)
                .then((didMatch) => {
                    if (didMatch) {
                        const jwtToken=jwt.sign({_id:userInDB._id},process.env.JWT_SECRET);
                        const userInfo={"email":userInDB.email,"fullName":userInDB.fullName}
                        res.status(200).json({ result:{token:jwtToken,user:userInfo} })
                    }
                    else {
                        return res.status(401).json({ error: "invadid user id password" })
                    }
                })
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;