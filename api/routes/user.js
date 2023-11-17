const router = require("express").Router();


router.get("/usertest", (req, res) => {  
    res.send("send all users")
})

module.exports = router  