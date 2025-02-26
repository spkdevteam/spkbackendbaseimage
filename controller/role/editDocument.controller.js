const editDocumentFn = require("../../model/services/roles/editDocumentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editDocument = async (req, res, next) => {
    try {
        const { roleId, arr, clientId } = await sanitizeBody(req.body);
        const result = await editDocumentFn({roleId, arr, clientId});
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = editDocument;