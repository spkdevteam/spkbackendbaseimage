const createUser = require("../../model/services/user/createUser")
const signin = require("../../model/services/user/signInUser")
const sanitizeBody = require("../../utils/sanitizeBody")



require("dotenv").config()

const signup = async (req, res, next) => {

    try {
        const data =await sanitizeBody(req.body)
        const result =await createUser(data)
        return res.status(201).json({ status: result.status, message:result.message, data:result.data })

    } catch (error) {
        next(error);
    }

}

const signInUser = async(req, res, next) =>{
    try {
        const result = await signin({clientId: process.env.CLIENTID_FOR_USER, req})
        return res.status(200).json({status: result.status, message: result.message, data: result.data })

    } catch (error) {
        next(error)
    }
}

module.exports = {signup, signInUser}