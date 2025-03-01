const leaveTypeEdit = require("../../model/services/leaveType/leaveTypeEdit")
const sanitizeBody = require("../../utils/sanitizeBody")

const editLeaveType = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {leaveName, leaveType, clientId, companyId, leaveId} = data
        const result = await leaveTypeEdit({leaveName, leaveType, clientId, companyId, leaveId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = editLeaveType