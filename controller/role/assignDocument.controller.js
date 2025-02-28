const assignDocumentFn = require("../../model/services/roles/assignDocumentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const assignDocument = async (req, res, next) => {
    try {
        const { roleId, arr, companyId, clientId } = await sanitizeBody(req.body);
        console.log(roleId, arr, companyId, clientId)
        const result = await assignDocumentFn({ roleId, arr, companyId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = assignDocument;