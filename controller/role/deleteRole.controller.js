const deleteRoleFn = require("../../model/services/roles/deleteRoleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteRole = async (req, res, next) => {
    try {
        const { roleId, clientId } = await sanitizeBody(req.params);
        const result = await deleteRoleFn({ roleId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = deleteRole;