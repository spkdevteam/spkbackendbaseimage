const applyLeave = require("../../model/services/userProfile/applyLeave")
const sanitizeBody = require("../../utils/sanitizeBody")

const applyForLeaveUserProfile = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {userId, companyId, leaveType, fromDate, toDate, totalDays, reason, status, appliedOn, clientId} = data
        const result = await applyLeave({userId, companyId, leaveType, fromDate, toDate, totalDays, reason, status,appliedOn, clientId, userId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = applyForLeaveUserProfile