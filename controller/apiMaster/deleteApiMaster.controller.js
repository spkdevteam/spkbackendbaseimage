const softDeleteAPI = require("../../model/services/apiMaster/deleteApiMaster")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteApiMaster = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)

        const {client: clientId} = req.params 
        if(!clientId){
            return res.status(400).json({status: false, message: "clientId is required"})
        }
        const result = await softDeleteAPI({clientId,req})
        
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = deleteApiMaster