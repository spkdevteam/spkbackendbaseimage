const attendanceDisplay = require("../../model/services/userProfile/attendanceDisplay")
const sanitizeBody = require("../../utils/sanitizeBody")

const displayAttendace = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await attendanceDisplay({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = displayAttendace