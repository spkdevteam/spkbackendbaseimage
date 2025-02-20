const getOneDepartmentFn = require("../../model/services/department/getOneDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOneDepartment = async (req, res, next) => {
    try {
        const department = await sanitizeBody(req.params);
        const result = await getOneDepartmentFn(department);
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getOneDepartment;