const createRuleFn = require("../../model/services/rules/createRuleFn");
const sanitizeBody = require("../../utils/sanitizeBody");


const createRule = async (req, res, next) => {
    try {
        const { userId, ruleName, apiId, menuId, companyId, clientId } = await sanitizeBody(req.body);
        const result = await createRuleFn({ userId, ruleName, apiId, menuId, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createRule;