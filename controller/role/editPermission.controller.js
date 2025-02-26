const editPermissionFn = require("../../model/services/roles/editPermissionFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editPermission = async (req, res, next) => {
    try {
        const {roleId, arr, clientId} = await sanitizeBody(req.body);
        const result = await editPermissionFn({roleId, arr, clientId});
        return res.status(200).json({status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = editPermission;