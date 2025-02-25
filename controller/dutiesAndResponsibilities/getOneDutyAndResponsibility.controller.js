const getOneDutyAndResponsibilityFn = require("../../model/services/dutiesAndResponsibilities/getOneDutyAndResponsibilityFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOneDutyAndResponsibility =async (req, res, next) => {
    try {
        const { id, clientId } = await sanitizeBody(req.params);
        const result = await getOneDutyAndResponsibilityFn({ id, clientId});
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getOneDutyAndResponsibility;