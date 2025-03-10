const toggleDesignationStatusFn = require("../../model/services/designation/toggleDesignationStatusFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const toggleDesignationStatus = async (req, res, next) => {
    try {
        const { userId, designationId, clientId } = await sanitizeBody(req.body);
        const result = await toggleDesignationStatusFn({ userId, designationId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = toggleDesignationStatus;