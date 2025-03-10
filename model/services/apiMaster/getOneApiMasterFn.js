const { default: mongoose } = require("mongoose");
const { apiSchema } = require("../../apiMaster");
const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation } = require("../validation/validation");

const getOneApiMasterFn = async ({ apiId, clientId }) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(apiId)){
            return {status: false, message: "Invalid api id"};
        }
        const clientIdValidationVar = clientIdValidation({ clientId });
        if(!clientIdValidationVar.status) return {status: false, message: "Some networking problem"};

        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);

        const api = await apiMaster.findOne({ _id: apiId, deletedAt: null });

        if(!api) return {status: false, message: "No such api, try again"};

        return {status: true, message: "Successfully fetched the api", data: api};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = getOneApiMasterFn;