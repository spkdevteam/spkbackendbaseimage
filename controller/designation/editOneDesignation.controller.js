const editOneDesignationFn = require("../../model/services/designation/editOneDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editOneDesignation = async (req, res, next) => {
    try {
        const designation = await sanitizeBody(req.body);
        const result = await editOneDesignationFn(designation);
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = editOneDesignation;