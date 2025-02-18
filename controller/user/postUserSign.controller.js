const createUser = require("../../model/services/user/createUser")
const signin = require("../../model/services/user/signInUser")
const sanitizeBody = require("../../utils/sanitizeBody")

require("dotenv").config()

const signup = async (req, res, next) => {

    try {
        console.log("Original request body:", req.body);
        // const { firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId} =await sanitizeBody(req.body)
        const data =await sanitizeBody(req.body)
        // console.log("After sanitization:", data);
        const result =await createUser(data)
        console.log("the result:", result);
        return res.status(201).json({ status: result?.status, message:result?.message, data:result?.data })

    } catch (error) {
        next(error);
    }

}

const signInUser = async(req, res, next) =>{
    try {
        const result = await signin({clientId: process.env.CLIENTID_FOR_USER, req, res})
        return res.status(200).json({status: result.status, message: result.message, data: result.data })

    } catch (error) {
        next(error)
    }
}

module.exports = {signup, signInUser}