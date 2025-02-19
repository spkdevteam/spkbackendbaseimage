const createAPI = require("../../model/services/apiMaster/createApiMaster")
const sanitizeBody = require("../../utils/sanitizeBody")
require("dotenv").config()

const createApiMaster = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        
        const result = await createAPI(data)

        if (!result.status) {
            if (result.message === "APIName already exists for this client") {
                return res.status(409).json({
                    status: result?.status,
                    message: result?.message, 
                });
            }
            return res.status(500).json({
                status: result?.status,
                message: result?.message || "Internal Server Error",
            });
        }

        return res.status(201).json({status: result?.status, message: result?.message, data:result?.data}) 
    } catch (error) {
        next(error)
    }
}

module.exports = createApiMaster