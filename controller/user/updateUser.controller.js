const editUser = require("../../model/services/user/edituser")
const sanitizeBody = require("../../utils/sanitizeBody")

const updateUser = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const result = await editUser({data})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
       next(error) 
    }
}
module.exports = updateUser