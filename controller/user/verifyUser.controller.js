const userVerify = require("../../model/services/user/userVerify")
const sanitizeBody = require("../../utils/sanitizeBody")

const verifyUser = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {clientId, userId, isVerify, companyId} = data
        const result = await userVerify({clientId, userId, isVerify, companyId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = verifyUser