const editOneDesignationFn = require("../../model/services/designation/editOneDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editOneDesignation = async (req, res, next) => {
    try {
        const { userId, designationId, designationName, shortName, companyId, clientId } = await sanitizeBody(req.body);
        const result = await editOneDesignationFn({ userId, designationId, designationName, shortName, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = editOneDesignation;