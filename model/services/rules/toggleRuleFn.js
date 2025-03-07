const { default: mongoose } = require("mongoose");
const { clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { rulesSchema } = require("../../rules");

const toggleRuleFn = async ({ userId, ruleId, clientId }) => {
    try {
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return {status: false, message: "Invalid user id, try again"};
            case !mongoose.Types.ObjectId.isValid(ruleId):
                return {status: false, message: "Invalid api id, try again"};
        };

        const clientIdValidationVar = clientIdValidation({ clientId });
        if(!clientIdValidationVar.status) return {status: false, message: "Networking problem, try again"};

        const db = await getClientDatabaseConnection(clientId);
        const Rule = await db.model("rule", rulesSchema);

        const api = await Rule.findOne({ _id: ruleId, deletedAt: null});

        if(!api) return {status: false, message: "No such apis"};

        const toggledRuleResponse = await Rule.toggleRule({ ruleId, userId });

        if(!toggledRuleResponse.status) return {status:false, message: "Failed to toggle the apis status"};

        return {status: true, message: "Successfully toggled the api status"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = toggleRuleFn;