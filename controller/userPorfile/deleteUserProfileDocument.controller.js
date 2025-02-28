const userProfileDocumentDelete = require("../../model/services/userProfile/userProfileDocumentDelete")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteUserProfileDocument = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await userProfileDocumentDelete({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}

module.exports = deleteUserProfileDocument