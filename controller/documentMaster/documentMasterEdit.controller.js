const editDocumentMaster = require("../../model/services/documentMaster/editDocumentMaster")
const sanitizeBody = require("../../utils/sanitizeBody")

const documentMasterEdit = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {Name, Property, Required, id, clientId} = data
        if(!Array.isArray(Property)){
            return res.status(400).json({status: false, message: "Property array is required"})
        }
        const result = await editDocumentMaster({Name, Property, Required, id, clientId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = documentMasterEdit