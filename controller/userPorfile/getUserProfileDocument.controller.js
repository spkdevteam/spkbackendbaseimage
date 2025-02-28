const userProfileGetDocument = require("../../model/services/userProfile/userProfileGetDocument.js")
const sanitizeBody = require("../../utils/sanitizeBody")

const getUserProfileDocument = async (req, res, next) =>{
    try {
        const {clientId, userId, roleId} = await sanitizeBody(req.params)
        const result = await userProfileGetDocument({clientId, userId, roleId})
        return res.status(200).json({status: result?.status, message: result?.message , data: result?.data})
    } catch (error) {
        next(error)
    }
}

module.exports = getUserProfileDocument