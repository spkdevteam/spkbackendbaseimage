const jwt = require("jsonwebtoken")
require("dotenv").config()

const authentication = async (req, res, next) =>{
    try {
        //get the token from header
        const authHeader = req.header("Authorization")

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message: "Access denied and no token provided"})
        }

        const token = authHeader.split(" ")[1]

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log("decoded:",decoded);
        

        if(!decoded?.userId){
            return res.status(401).json({message: "Invalid token"})
        }
        req.user = {id: decoded.userId} //store userId in req.user
        next()

    } catch (error) {
        console.log("Authentication error", error.message);
        
        return res.status(401).json({message: "Invalid or expired token"})
    }
}

module.exports = authentication