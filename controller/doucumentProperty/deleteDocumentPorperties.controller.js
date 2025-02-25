const removeDocumentProprties = require("../../model/services/documentProperties/deleteDocumentProperties")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteDocumentProperties = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.params)
        const {clientId, id} = data
        const result = await removeDocumentProprties({clientId, id})
        return res.status(200).json({status: result.status, message: result.message})
    } catch (error) {
        next(error)
    }
}
module.exports = deleteDocumentProperties