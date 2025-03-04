const generatejwtToken = require("../../middleware/token/createToken")
const createUser = require("../../model/services/user/createUser")
const signin = require("../../model/services/user/signInUser")
const userSchema = require("../../model/userSchema")
const setTokenCookie = require("../../utils/generateToken")
const sanitizeBody = require("../../utils/sanitizeBody")

require("dotenv").config()

const signup = async (req, res, next) => {

    try {
        const data =await sanitizeBody(req.body)
        const { firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId} = data
        const result =await createUser({ firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId})
        console.log("the result:", result);
        return res.status(201).json({ status: result?.status, message:result?.message, data:result?.data })

    } catch (error) {
        next(error);
    }

}

const signInUser = async(req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body) || {}
        const email = data?.email || data?.userId
        const { password, companyId, clientId} = data
        const result = await signin({userId: email, password, companyId, clientId})
        // const user = result.data
        // const token = generatejwtToken({userId: user?._id}) 
        // setTokenCookie(res, token)

        return res.status(200).json({status: result.status, message: result.message, data: result.data })

    } catch (error) {
        next(error)
    }
}

module.exports = {signup, signInUser}