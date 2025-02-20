const generatejwtToken = require("../../middleware/token/createToken")
const createUser = require("../../model/services/user/createUser")
const signin = require("../../model/services/user/signInUser")
const userSchema = require("../../model/userSchema")
const setTokenCookie = require("../../utils/generateToken")
const sanitizeBody = require("../../utils/sanitizeBody")

require("dotenv").config()

const signup = async (req, res, next) => {

    try {
        console.log("Original request body:", req.body);
        // const { firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId} =await sanitizeBody(req.body)
        const data =await sanitizeBody(req.body)
        // console.log("After sanitization:", data);
        const result =await createUser({data})
        console.log("the result:", result);
        return res.status(201).json({ status: result?.status, message:result?.message, data:result?.data })

    } catch (error) {
        next(error);
    }

}

const signInUser = async(req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const result = await signin({data})
        const user = result.data
        const token = generatejwtToken(user._id) 
        setTokenCookie(res, token)

        return res.status(200).json({status: result.status, message: result.message, data: result.data })

    } catch (error) {
        next(error)
    }
}

module.exports = {signup, signInUser}