const editOneRuleAndPermissionFn = require("../../model/services/rulesAndPermission/editOneRuleAndPermissionFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editOneRuleAndPermission = async (req, res, next) => {
    try {
        const { id, rulesName, apiId, departmentId, clientId } = await sanitizeBody(req.body);
        const result = await editOneRuleAndPermissionFn({ id, rulesName, apiId, departmentId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = editOneRuleAndPermission;