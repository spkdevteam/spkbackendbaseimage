const sanitizeBody = require("../../utils/sanitizeBody");
const editOneDepartmentFn = require("../../model/services/department/editOneDepartmentFn");

const editOneDepartment = async (req, res, next) => {
    try {
        const { id, deptName, description, clientId } = await sanitizeBody(req.body);
        const result = await editOneDepartmentFn({ id, deptName, description, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = editOneDepartment;