const deletedUser = require("../../model/services/user/deletedUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteUser = async(req, res, next) =>{
    try {
        const removeUser = await sanitizeBody(req.params)
        const result = await deletedUser(removeUser)
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = deleteUser