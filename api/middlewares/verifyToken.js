const jwt = require("jsonwebtoken")


const verifyToken = (req, res, next) => {  
     const authHeader = req?.headers?.token;
     if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {  
            if (err) {
                res.status(403).json("your token is not valid!")
            }else{
                req.user = user;
                next()
            }
        })
     } else {
        res.status(401).json("you are not authorized to do this!")
     }
}


const veryfyTokenAuthorization = (req, res, next) => {  
    verifyToken(req, res, () => {  
        if (req.user.id === req.params.id) {
            next();
        } else {
            res.status(403).json("your are not authorized!")
        }
    })
}

module.exports = {verifyToken, veryfyTokenAuthorization}