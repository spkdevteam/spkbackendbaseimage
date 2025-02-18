const {getUserAll} = require("../../model/services/user/getUser");
const getUserId = require("../../model/services/user/getUserById");

const userSchema = require("../../model/userSchema");
const sanitizeBody = require("../../utils/sanitizeBody");
require("dotenv").config()

const getAllUser = async (req, res, next) =>{
    try {
         const result = await getUserAll({clientId: process.env.CLIENTID_FOR_USER})
         return res.status(200).json({status: result.status, message: result.message, data: result.data })
    } catch (error) {
        next(error)
    }
}

const getUserById = async(req, res, next) =>{
    try {
        const result = await getUserId({clientId: process.env.CLIENTID_FOR_USER, req})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}


module.exports = {getAllUser, getUserById}