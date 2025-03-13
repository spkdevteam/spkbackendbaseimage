const userToggle = require("../../model/services/user/userToggle")
const sanitizeBody = require("../../utils/sanitizeBody")

const toggleUser = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {clientId, userId, editedBy, companyId} = data
        const result = await userToggle({clientId, userId, editedBy, companyId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = toggleUser