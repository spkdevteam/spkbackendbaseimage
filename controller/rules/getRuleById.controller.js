const getRuleByIdFn = require("../../model/services/rules/getRuleByIdFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getRuleById = async (req, res, next) => {
    try {
        const { ruleId, clientId } = await sanitizeBody(req.params);
        const result = await getRuleByIdFn({ ruleId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getRuleById;