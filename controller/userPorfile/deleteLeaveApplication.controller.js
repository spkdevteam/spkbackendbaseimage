const userProfileDeleteLeaveApplication = require("../../model/services/userProfile/userProfileDeleteLeaveApplication")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteLeaveApplication = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await userProfileDeleteLeaveApplication({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
} 
module.exports = deleteLeaveApplication