const {getUserAll} = require("../../model/services/user/getUser");
const getUserId = require("../../model/services/user/getUserById");

const userSchema = require("../../model/userSchema");
const sanitizeBody = require("../../utils/sanitizeBody");
require("dotenv").config()

const getAllUser = async (req, res, next) =>{
    try {
        const getAllUser = await sanitizeBody(req.params)
         const result = await getUserAll(getAllUser)
         return res.status(200).json({status: result.status, message: result.message, data: result.data })
    } catch (error) {
        next(error)
    }
}

const getUserById = async(req, res, next) =>{
    try {
        const user = await sanitizeBody(req.params);
        const result = await getUserId(user)
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}


module.exports = {getAllUser, getUserById}