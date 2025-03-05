const deleteRuleFn = require("../../model/services/rules/deleteRuleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteRule = async (req, res, next) => {
    try {
        const { userId, ruleId, clientId } = await sanitizeBody(req.params);
        const result = await deleteRuleFn({ userId, ruleId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message})
    } catch (error) {
        next(error);
    }
}


module.exports = deleteRule;