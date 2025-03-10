const deleteDesignationFn = require("../../model/services/designation/deleteDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteDesignation = async (req, res, next) => {
    try {
        const { designationId, clientId } = await sanitizeBody(req.params);
        const { userId } = await sanitizeBody(req.body);
        const result = await deleteDesignationFn({ userId, designationId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDesignation;