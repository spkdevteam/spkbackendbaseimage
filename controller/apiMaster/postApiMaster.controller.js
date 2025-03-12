const createAPI = require("../../model/services/apiMaster/createApiMaster")
const sanitizeBody = require("../../utils/sanitizeBody")
require("dotenv").config()

const createApiMaster = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {APIName, path, menu, menuRouter, clientId} = data
        const result = await createAPI({APIName, path, menu, menuRouter, clientId})

        return res.status(201).json({status: result?.status, message: result?.message, data:result?.data}) 
    } catch (error) {
        next(error)
    }
}

module.exports = createApiMaster