const createRuleFn = require("../../model/services/rules/createRuleFn");
const sanitizeBody = require("../../utils/sanitizeBody");


const createRule = async (req, res, next) => {
    try {
        const { _id= null, userId, ruleName, apiId, menuId, companyId, clientId } = await sanitizeBody(req.body);
        const result = await createRuleFn({ _id, userId, ruleName, apiId, menuId, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createRule;