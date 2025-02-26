const deleteDocumentMaster = require("../../model/services/documentMaster/deleteDocumentMaster")
const sanitizeBody = require("../../utils/sanitizeBody")

const documentMasterDelete = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.params)
        const {clientId, id} = data
        const result = await deleteDocumentMaster({clientId, id})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = documentMasterDelete