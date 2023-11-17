const router = require("express").Router();
const User = require("../models/User")
const {verifyToken, veryfyTokenAuthorization} = require("../middlewares/verifyToken")


// get all users
router.get("/all",async (req, res) => {  
    const allUsers = await User.find()
    res.status(200).json(allUsers)
})

// update user
router.put("/:id", veryfyTokenAuthorization , async (req, res) => {  
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE
router.delete("/:id", veryfyTokenAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User is deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
    });

// get user by id
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router  