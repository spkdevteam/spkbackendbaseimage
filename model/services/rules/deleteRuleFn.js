const { getClientDatabaseConnection } = require("../../connection");
const { rulesSchema } = require("../../rules");
const { clientIdValidation } = require("../validation/validation");

const deleteRuleFn = async ({ userId, ruleId, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId})
        ];

        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return {status:false, message: error.map((e)=> e.message).join(", ")};

        const db = await getClientDatabaseConnection(clientId);
        const Rule = await db.model("rule", rulesSchema);

        const noSuchCertificate = await Rule.findOne({ _id: ruleId, deletedAt: null });
        if(noSuchCertificate) return {status: false, message: "No such Rule, try again"};

        const rule = await Rule.softDeleteRule({ userId, ruleId });

        if(rule) return { status: false, message: "The rule is deleted"};

        return {status: false, message: "Failed to delete"};
    } catch (error) {
        return {status:false, message: error.message};
    }
}

module.exports = deleteRuleFn;