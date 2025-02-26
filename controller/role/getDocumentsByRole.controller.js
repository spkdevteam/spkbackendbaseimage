const getDocumentsByRoleFn = require("../../model/services/roles/getDocumentsByRoleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getDocumentsByRole = async (req, res, next) => {
    try {
        const { role, clientId } = await sanitizeBody(req.params);
        const result = await getDocumentsByRoleFn({ role, clientId });
        return res.status(200).json({status: result?.state, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getDocumentsByRole;