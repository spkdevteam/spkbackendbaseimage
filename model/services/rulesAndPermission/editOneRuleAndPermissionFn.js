const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const rulesSchema = require("../../rules");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");

const editOneRuleAndPermissionFn = async ({ id, rulesName, apiId, departmentId, clientId }) => {
    try {
         //validating the strings
         const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: rulesName, name: 'Rule name: '})
        ];

        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map(e=>e.message).join(", ")};


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid rule ID" };
        };

        //checking all the userids that were provided
        const ObjectId = mongoose.Types.ObjectId;
        const isValidObjectId = (id) => (typeof id === "string" && ObjectId.isValid(id)) ? new ObjectId(id) : null;

        //establishing connection to the DB
        const db = await getClientDatabaseConnection(clientId);
        const RulesAndPermission = db.model("Rule", rulesSchema);

        const existingRule = await RulesAndPermission.findOne({ _id: id, deletedAt: null });


        if(!existingRule) return { status: false, message: "Try again!"};


        if(existingRule.rulesName === rulesName && existingRule.apiId == apiId && existingRule.departmentId == departmentId ) return { status: false, message: "No change done."};

        //updating the rule
        const updateRulesAndPermission = await RulesAndPermission.updateOne({ _id: id, deletedAt: null}, { $set: { rulesName, apiId: isValidObjectId(apiId), departmentId: isValidObjectId(departmentId)}});

        //finding the updated user
        const updatedUser = await RulesAndPermission.findById(id);

        if(updateRulesAndPermission.modifiedCount > 0) return { status: true, message: "The rule has updated." };

        return { status: false, message: "Operation failed."};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneRuleAndPermissionFn;