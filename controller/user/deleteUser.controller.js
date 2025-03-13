const deletedUser = require("../../model/services/user/deletedUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteUser = async(req, res, next) =>{
    try {
        const removeUser = await sanitizeBody(req.params)
        const removeUserBody = await sanitizeBody(req.body)
        const {id, clientId} = removeUser
        const {deletedBy} = removeUserBody
        console.log("|||||||||||||||||||||||||||||||", id,  deletedBy,clientId);
        const result = await deletedUser({id, clientId, deletedBy})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = deleteUser