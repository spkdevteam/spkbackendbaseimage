const getAllLeaveApplcation = require("../../model/services/userProfile/getAllLeaveApplication")
const sanitizeBody = require("../../utils/sanitizeBody")

const getAllLeaveApplicationUserProfile = async (req, res, next) =>{
    try {
        const {userId, clientId, companyId} = await sanitizeBody(req.params)
        const result = await getAllLeaveApplcation({userId, clientId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data, metaData: result?.metaData})
    } catch (error) {
        next(error)
    }
}
module.exports = getAllLeaveApplicationUserProfile