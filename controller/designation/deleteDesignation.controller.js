const deleteDesignationFn = require("../../model/services/designation/deleteDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteDesignation = async (req, res, next) => {
    try {
        const { id, clientId } = await sanitizeBody(req.params);
        const result = await deleteDesignationFn({ id, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDesignation;