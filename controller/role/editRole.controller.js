const editRolesFn = require("../../model/services/roles/editRoleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editRoles = async(req, res, next) =>{
    try {
        const { roleId, designationId, departmentId, clientId } = await sanitizeBody(req.params);
        const result = await editRolesFn({roleId, designationId, departmentId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = editRoles;