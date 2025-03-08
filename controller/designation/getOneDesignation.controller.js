const getOneDesignationFn = require("../../model/services/designation/getOneDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOneDesignation = async (req, res, next) => {
    try {
        const { designationId, clientId } = await sanitizeBody(req.params);
        const result = await getOneDesignationFn({ designationId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getOneDesignation;