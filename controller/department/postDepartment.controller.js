const createDepartmentFn = require("../../model/services/department/createDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createDepartment = async (req, res, next) => {
    try {
        const department = await sanitizeBody(req.body);
        const result = await createDepartmentFn(department);
        return res.status(201).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = createDepartment;