const getOneRulesAndPermissionsFn = require("../../model/services/rulesAndPermission/getOneRulesAndPermissionsFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOneRulesAndPermissions = async (req, res, next) => {
    try {
        const { id, clientId } = await sanitizeBody(req.params);
        const result = await getOneRulesAndPermissionsFn({ id, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getOneRulesAndPermissions;