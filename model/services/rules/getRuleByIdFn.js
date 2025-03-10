const { getClientDatabaseConnection } = require("../../connection");
const { rulesSchema } = require("../../rules");
const { clientIdValidation } = require("../validation/validation");

const getRuleByIdFn = async ({ ruleId, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map((e)=> e.message).join(", ")};

        const db = await getClientDatabaseConnection(clientId);
        const Rule = await db.model("Rule", rulesSchema);

        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id" };
        };

        const rule = await Rule.findOne({ _id: ruleId, deletedAt: null });

        if(!rule) return { status: false, message: "Network problem, try again"};

        return { status: true,message: "Rule fetched successfully", data: rule};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = getRuleByIdFn;