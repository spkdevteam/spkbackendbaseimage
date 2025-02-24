const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const rulesSchema = require("../../rules");
const { clientIdValidation } = require("../validation/validation");

const getOneRulesAndPermissionsFn = async ({ id, clientId }) => {
    try {

        const validation = [
            clientIdValidation({ clientId })
        ];


        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map(e=>e.message).join(", ")};



        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        };

        const db = await getClientDatabaseConnection(clientId);
        const RulesAndPermission = await db.model("Rule", rulesSchema);


        const consistingRulesAndPermission = await RulesAndPermission.findOne({ _id: id, deletedAt: null });


        if(!consistingRulesAndPermission) return { status: false, message: "No rule exists with this ID."};

        return { status: true, message: "Your rule is here", data: consistingRulesAndPermission };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getOneRulesAndPermissionsFn;