require("dotenv").config()
const jwt = require("jsonwebtoken")

const generatejwtToken = async (userId) =>{
    try {
        //generate token
        const token =  jwt.sign(
            {userId},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "7d"}
        )
        return token
    } catch (error) {
        console.log("Error generating jwt:", error);
        return null
    }
}
module.exports = generatejwtToken