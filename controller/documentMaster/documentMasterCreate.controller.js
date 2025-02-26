const createDocumentmaster = require("../../model/services/documentMaster/createDocumentMaster")
const sanitizeBody = require("../../utils/sanitizeBody")

const documentMasterCreate = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {Name, Property,Required, clientId} = data
        if(!Array.isArray(Property)){
            return res.status(400).json({status: false, message: "Property array is required"})
        }
        const result = await createDocumentmaster({Name, Property,Required, clientId})
        return res.status(201).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = documentMasterCreate