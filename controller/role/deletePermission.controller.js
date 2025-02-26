const deletePermissionFn = require("../../model/services/roles/deletePermissionFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deletePermission = async (req, res, next)=>{
    try {
        const { roleId, clientId } = await sanitizeBody(req.params);
        const result = await deletePermissionFn({ roleId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deletePermission;