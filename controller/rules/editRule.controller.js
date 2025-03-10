const editRuleFn = require("../../model/services/rules/editRuleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editRule = async (req, res, next) => {
    try {
        const { userId, ruleId, ruleName, clientId } = await sanitizeBody(req.body);
        const result = await editRuleFn({ userId, ruleId, ruleName, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = editRule;