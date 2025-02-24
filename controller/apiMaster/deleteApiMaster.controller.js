const softDeleteAPI = require("../../model/services/apiMaster/deleteApiMaster")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteApiMaster = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.params)
        const {id, clientId} = data
        const result = await softDeleteAPI({id, clientId})
        
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = deleteApiMaster