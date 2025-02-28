const editLeave = require("../../model/services/userProfile/editLeave")
const sanitizeBody = require("../../utils/sanitizeBody")

const userProfileEditLeave = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {userId, leaveType, fromDate, toDate, totalDays, reason, status, appliedOn, companyId, clientId} = data
        const result = await editLeave({userId, leaveType, fromDate, toDate, totalDays, reason, status, appliedOn, companyId, clientId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = userProfileEditLeave