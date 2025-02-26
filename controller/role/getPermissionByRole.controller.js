const getPermissionByRoleFn = require("../../model/services/roles/getPermissionByRoleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPermissionByRole = async (req, res, next) => {
    try {
        const { role, clientId } = await sanitizeBody(req.params);
        const result = await getPermissionByRoleFn({ role, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getPermissionByRole;