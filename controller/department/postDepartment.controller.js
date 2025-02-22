const createDepartmentFn = require("../../model/services/department/createDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createDepartment = async (req, res, next) => {
    try {
        const { deptName, reportingDept, description, isActive, clientId } = await sanitizeBody(req.body);
        const result = await createDepartmentFn({ deptName, reportingDept, description, isActive, clientId });
        return res.status(201).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = createDepartment;