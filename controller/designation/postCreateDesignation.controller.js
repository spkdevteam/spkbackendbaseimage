const createDesignationFn = require("../../model/services/designation/createDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createDesignation = async (req, res, next) => {
    try {
        const { _id = null, userId, designationName, companyId, shortName, clientId } = await sanitizeBody(req.body);
        const result = await createDesignationFn({ _id, userId, designationName, companyId, shortName, clientId });
        return res.status(201).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createDesignation;