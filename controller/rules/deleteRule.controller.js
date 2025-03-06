const deleteRuleFn = require("../../model/services/rules/deleteRuleFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteRule = async (req, res, next) => {
    try {
        const { ruleId, clientId } = await sanitizeBody(req.params);
        const { userId } = await sanitizeBody(req.body);
        const result = await deleteRuleFn({ userId, ruleId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message})
    } catch (error) {
        next(error);
    }   
}


module.exports = deleteRule;