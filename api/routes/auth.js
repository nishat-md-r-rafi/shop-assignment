const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// register
router.post("/register", async (req, res) => {  
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
        created_by: req.body.created_by,
    })

    console.log(newUser)

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)     
    } catch (error) {
        res.status(500).json(error) 
    }
})

// login
router.post("/login", async (req, res) => {  
    console.log(req.body)
    try {
        const user = await User.findOne({name: req.body.name})

        if (!user) {
            res.status(401).json("No user with that name!") 
        } else {  
            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
            const DBpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    
            if (req.body.password !== DBpassword) {
                res.status(401).json("wrong credentials!")
            } else {
                const accessToken = jwt.sign({
                    id:user._id,
                    created_by: user.created_by
                }, process.env.JWT_SECRET,
                {expiresIn:"4h"}
                )
                const {password, ...otherInfo} = user._doc
                res.status(200).json({...otherInfo, accessToken})     
            }         
        }

    } catch (error) {
        res.status(500).json(error) 
    }
})

module.exports = router  