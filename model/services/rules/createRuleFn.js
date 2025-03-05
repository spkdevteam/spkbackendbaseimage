const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { rulesSchema } = require("../../rules");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");

const createRuleFn = async ({ userId, ruleName, apiId, menuId, companyId, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: ruleName, name: "rule name: " })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map((e)=> e.message).join(", ")};

        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id"};
            case !mongoose.Types.ObjectId.isValid(apiId):
                return { status: false, message: "Invalid api id"};
            case !mongoose.Types.ObjectId.isValid(menuId):
                return { status: false, message: "Invalid menu id"};
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id"};
        };

        const db = await getClientDatabaseConnection(clientId);
        const Rule = await db.model("rule", rulesSchema);

        const ruleAlreadyExists = await Rule.findOne({ ruleName, companyId, deletedAt: null });
        if(ruleAlreadyExists) return { status:true, message: "This rule already exists here"};

        const rule = await Rule.insertRule({ userId, ruleName, apiId, menuId, companyId });

        return {status: true, message: "Rule successfully saved", data: rule.rule};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createRuleFn;