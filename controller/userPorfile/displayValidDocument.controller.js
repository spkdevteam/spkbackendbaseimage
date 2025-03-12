const documentValidDisplay = require("../../model/services/userProfile/documentValidDisplay")
const sanitizeBody = require("../../utils/sanitizeBody")

const displayValidDocument = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await documentValidDisplay({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}

module.exports = displayValidDocument