const updateDocumentProperties = require("../../model/services/documentProperties/updateDocumentProperties")
const sanitizeBody = require("../../utils/sanitizeBody")

const editDocumentProperties = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {id, clientId, PropertyName, Type} = data
        const result = await updateDocumentProperties({id, clientId, PropertyName, Type})
        return res.status(200).json({status: result.status, message: result.message})
    } catch (error) {
        next(error)
    }
}
module.exports = editDocumentProperties