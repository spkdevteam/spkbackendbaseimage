const createRulesAndPermissionFn = require("../../model/services/rulesAndPermission/createRulesAndPermissionFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createRulesAndPermission = async (req, res, next) => {
    try {
        const { rulesName, companyId, apiId, departmentId, branchId, createdBy, clientId } = await sanitizeBody(req.body);
        const result = await createRulesAndPermissionFn({ rulesName, companyId, apiId, departmentId, branchId, createdBy, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createRulesAndPermission;