const getProfileUser = require("../../model/services/userProfile/getProfileUser");
const sanitizeBody = require("../../utils/sanitizeBody")

const getUserProfile = async (req, res, next) =>{
    try {
        const {clientId, userId} = await sanitizeBody(req.params);
        const result = await getProfileUser({clientId, userId})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}
module.exports = getUserProfile