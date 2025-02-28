const assignPermissionFn = require("../../model/services/roles/assignPermissionFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const assignPermission = async (req, res, next) => {
    try {
        const { roleId, arr, companyId, clientId } = await sanitizeBody(req.body);
        const result = await assignPermissionFn({ roleId, arr, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = assignPermission;