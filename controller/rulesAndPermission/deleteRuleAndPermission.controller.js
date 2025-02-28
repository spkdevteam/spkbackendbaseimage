const deleteRulesAndPermissonFn = require("../../model/services/rulesAndPermission/deleteRulesAndPermissonFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteRulesAndPermisson = async (req, res, next) => {
    try {
        const { id, clientId } = await sanitizeBody(req.params);
        const result = await deleteRulesAndPermissonFn({ id, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteRulesAndPermisson;