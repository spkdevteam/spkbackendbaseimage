const leaveTypeDelete = require("../../model/services/leaveType/leaveTypeDelete")
const sanitizeBody = require("../../utils/sanitizeBody")

const deletedLeaveType = async (req, res, next) =>{
    try {
        const {clientId, companyId, leaveId} = await sanitizeBody(req.params)
        const result = await leaveTypeDelete({clientId, companyId, leaveId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(Error)
    }
}
module.exports = deletedLeaveType