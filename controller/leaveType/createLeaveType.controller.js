const leaveTypeCreate = require("../../model/services/leaveType/leaveTypeCreate")
const sanitizeBody = require("../../utils/sanitizeBody")

const createLeaveType = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {leaveName, leaveType, companyId, clientId} = data
        const result = await leaveTypeCreate({leaveName, leaveType, companyId, clientId})
        return res.status(201).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = createLeaveType