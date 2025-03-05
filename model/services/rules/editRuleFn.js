const { getClientDatabaseConnection } = require("../../connection");
const { rulesSchema } = require("../../rules");
const { clientIdValidation } = require("../validation/validation");

const editRuleFn = async ({ userId, ruleId, ruleName, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId })
        ];
        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map((e)=> e.message).join(", ")};

        const db = await getClientDatabaseConnection(clientId);
        const Rule = await db.model("rule", rulesSchema);

        const theRule = await Rule.findOne({ _id: ruleId, deletedAt: null });

        if(!theRule) return { status: false, message: "Network problem, try again"}; 

        if(theRule.ruleName == ruleName) return { status: false, message: "Nothing to change"};

        const rule = await Rule.updateRule({ userId, ruleId, ruleName });

        return {status: true, message: "The rule was updated" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editRuleFn;