const deleteDutyAndResponsibilityFn = require("../../model/services/dutiesAndResponsibilities/deleteDutyAndResponsibilityFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteDutyAndResponsibility = async (req, res, next)=>{
    try {
        const { id, clientId } = await sanitizeBody(req.params);
        const result = await deleteDutyAndResponsibilityFn({ id, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDutyAndResponsibility;