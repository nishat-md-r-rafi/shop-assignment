const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")


router.post("/register", async (req, res) => {  
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET),
        created_by: req.body.created_by,
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)     
    } catch (error) {
        res.status(500).json(error) 
    }
})

module.exports = router  