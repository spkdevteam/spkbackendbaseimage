const deleteDocumentFn = require("../../model/services/roles/deleteDocumentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteDocument = async (req, res, next) => {
    try {
        const { roleId, companyId, clientId } = await sanitizeBody(req.params);
        const result = await deleteDocumentFn({ roleId, companyId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDocument;