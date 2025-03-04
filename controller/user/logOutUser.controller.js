const logOut = require("../../model/services/user/logOut")
const sanitizeBody = require("../../utils/sanitizeBody")

const logOutUser = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const id = data?.id || data?.userId
        const {clientId} = data
        const result = await logOut({clientId, userId: id})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports= logOutUser