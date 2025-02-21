const deleteDepartmentFn = require("../../model/services/department/deleteDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteDepartment = async (req, res, next) => {
    try {
        const department = await sanitizeBody(req.params);
        const result = await deleteDepartmentFn(department);
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDepartment;