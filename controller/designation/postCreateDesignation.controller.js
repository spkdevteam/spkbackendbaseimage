const createDesignationFn = require("../../model/services/designation/createDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createDesignation = async (req, res, next) => {
    try {
        const { title, companyId, shortName, isActive, clientId } = await sanitizeBody(req.body);
        const result = await createDesignationFn({ title, companyId, shortName, isActive, clientId });
        return res.status(201).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createDesignation;