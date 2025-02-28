const userProfileDisplayPermission = require("../../model/services/userProfile/userProfileDisplayPermission")
const sanitizeBody = require("../../utils/sanitizeBody")

const displayProfilePermission = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await userProfileDisplayPermission({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = displayProfilePermission