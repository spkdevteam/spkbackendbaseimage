const deleteDepartmentFn = require("../../model/services/department/deleteDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteDepartment = async (req, res, next) => {
    try {
        const { departmentId, clientId } = await sanitizeBody(req.params);
        const {userId} = await sanitizeBody(req.body)
        const result = await deleteDepartmentFn({ userId, departmentId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDepartment;