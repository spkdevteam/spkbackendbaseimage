const createRoleFn = require("../../model/services/roles/createRoleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createRole = async (req, res, next) => {
    try {
        const { name, designationId, departmentId, clientId } = await sanitizeBody(req.body);
        const result = await createRoleFn({ name, designationId, departmentId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = createRole;