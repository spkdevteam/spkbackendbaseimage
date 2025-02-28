const userProfileDocumentUpdate = require("../../model/services/userProfile/userProfileDocumentUpdate")
const sanitizeBody = require("../../utils/sanitizeBody")

const updateUserProfileDocument = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {userId, roleId, clientId} = data
        const result = await userProfileDocumentUpdate({userId, roleId, clientId})
        return res.status(200).json({status: result?.status , message: result?.message})
    } catch (error) {
        next(error)
    }
}

module.exports = updateUserProfileDocument