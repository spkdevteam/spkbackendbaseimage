const getDocumentsByRoleIdFn = require("../../model/services/roles/getDocumentsByRoleIdFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getDocumentsByRoleId = async (req, res, next) => {
    try {
        const { roleId, clientId } = await sanitizeBody(req.params);
        const result = await getDocumentsByRoleIdFn({ roleId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getDocumentsByRoleId;