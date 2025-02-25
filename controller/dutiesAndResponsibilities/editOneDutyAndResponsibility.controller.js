const editOneDutyAndResponsibilityFn = require("../../model/services/dutiesAndResponsibilities/editOneDutyAndResponsibilityFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editOneDutyAndResponsibility = async (req, res, next) => {
    try {
        const { deptName, designation, rules, documents, clientId } = await sanitizeBody(req.body);
        const result = await editOneDutyAndResponsibilityFn({ deptName, designation, rules, documents, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = editOneDutyAndResponsibility;