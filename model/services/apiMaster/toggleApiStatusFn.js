const { default: mongoose } = require("mongoose");
const { clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { apiSchema } = require("../../apiMaster");

const toggleApiStatusFn = async ({ userId, apiId, clientId }) => {
    try {
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return {status: false, message: "Invalid user id, try again"};
            case !mongoose.Types.ObjectId.isValid(apiId):
                return {status: false, message: "Invalid api id, try again"};
        };

        const clientIdValidationVar = clientIdValidation({ clientId });
        if(!clientIdValidationVar.status) return {status: false, message: "Networking problem, try again"};

        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);

        const api = await apiMaster.findOne({ _id: apiId, deletedAt: null});

        if(!api) return {status: false, message: "No such apis"};

        const toggledApiResponse = await apiMaster.toggleApiMaster({ apiId, userId });

        if(!toggledApiResponse.status) return {status:false, message: "Failed to toggle the apis status"};

        return {status: true, message: "Successfully toggled the api status"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = toggleApiStatusFn;