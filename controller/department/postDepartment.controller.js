const createDepartmentFn = require("../../model/services/department/createDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createDepartment = async (req, res, next) => {
    try {
        const { _id = null, userId, deptName, companyId, description, shift, clientId } = await sanitizeBody(req.body);
        const result = await createDepartmentFn({ _id, userId, deptName, companyId, description, shift, clientId });
        return res.status(201).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = createDepartment;