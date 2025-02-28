const getPermissionsByRoleIdFn = require("../../model/services/roles/getPermissionsByRoleIdFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPermissionsByRoleId = async (req, res, next) => {
    try {
        const { roleId, companyId, clientId } = await sanitizeBody(req.params);
        const result = await getPermissionsByRoleIdFn({ roleId, companyId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getPermissionsByRoleId;