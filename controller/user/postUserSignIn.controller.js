const signin = require("../../model/services/user/postUser")
const sanitizeBody = require("../../utils/sanitizeBody")


require("dotenv").config()

const signInUser = async(req, res, next) =>{
    try {
        const result = await signin({clientId: process.env.CLIENTID_FOR_USER, req})
        return res.status(200).json({status: result.status, message: result.message, data: result.data })

    } catch (error) {
        next(error)
    }
}

module.exports = signInUser