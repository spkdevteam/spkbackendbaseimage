const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const rulesSchema = require("../../rules");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");

const createRulesAndPermissionFn = async ({ rulesName, companyId, apiId, departmentId, branchId, createdBy, clientId }) => {
    try {
        //validating the strings
        const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: rulesName, name: 'Rule name: ' })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };



        switch (true) {
            case !mongoose.Types.ObjectId.isValid(apiId):
                return { status: false, message: "Invalid api ID" };
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company ID" };
            case !mongoose.Types.ObjectId.isValid(departmentId):
                return { status: false, message: "Invalid department ID" };
            case !mongoose.Types.ObjectId.isValid(branchId):
                return { status: false, message: "Invalid branch ID" };
            case !mongoose.Types.ObjectId.isValid(createdBy):
                return { status: false, message: "Invalid created ID" };
        };

        //checking all the userids that were provided
        const ObjectId = mongoose.Types.ObjectId;
        const isValidObjectId = (id) => (typeof id === "string" && ObjectId.isValid(id)) ? new ObjectId(id) : null;

        //establishing connection to the DB
        const db = await getClientDatabaseConnection(clientId);
        const RulesAndPermission = db.model("Rule", rulesSchema);


        //creating a new object
        const newRulesAndPermission = new RulesAndPermission({
            rulesName,
            companyId,
            apiId: isValidObjectId(apiId),
            departmentId: isValidObjectId(departmentId),
            companyId: isValidObjectId(branchId),
            createdBy: isValidObjectId(createdBy)
        })

        //saving the object
        await newRulesAndPermission.save();

        return { status: true, message: "New Rule is created", data: { _id: newRulesAndPermission._id, branchId } }
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createRulesAndPermissionFn;