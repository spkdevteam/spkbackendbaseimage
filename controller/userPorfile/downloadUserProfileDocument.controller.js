const userProfileDownloadDocument = require("../../model/services/userProfile/userPorfileDownloadDocument")
const sanitizeBody = require("../../utils/sanitizeBody")

const downloadUserProfileDocument = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await userProfileDownloadDocument({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}

module.exports = downloadUserProfileDocument