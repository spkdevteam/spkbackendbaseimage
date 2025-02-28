const getByRoleIdFn = require("../../model/services/roles/getByRoleIdFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getByRoleId = async (req, res, next) => {
    try {
        const { roleId, companyId, clientId } = await sanitizeBody(req.params);
        const result = await getByRoleIdFn({ roleId, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getByRoleId;