const toggleRuleFn = require("../../model/services/rules/toggleRuleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const toggleRuleStatus = async (req, res, next) => {
    try {
        const { userId, ruleId, clientId } = await sanitizeBody(req.body);
        const result = await toggleRuleFn({ userId, ruleId, clientId });
        return res.status(200).json({ status:result?.status, message: result?.message });
    } catch (error) { 
        next(error);
    }
};

module.exports = toggleRuleStatus;