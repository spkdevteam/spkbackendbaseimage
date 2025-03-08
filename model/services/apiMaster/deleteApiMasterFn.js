const { default: mongoose } = require("mongoose");
const { apiSchema } = require("../../apiMaster");
const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation } = require("../validation/validation");

const deleteApiMasterFn = async ({ userId, apiId, clientId }) => {
    try {
        //checking the ids
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(apiId):
                return { status: false, message: "Invalid api ID" };
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user ID" };
        };

        //validating ids 
        const validation = [
            clientIdValidation({ clientId })
        ];
        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map((e) => e.message).join(", ") };

        //estblishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);

        const apiDoNotExists = await apiMaster.findOne({ _id: apiId, deletedAt: null });

        if (!apiDoNotExists) return { status: false, message: "There no such api, try again" };

        //performing deletion
        const deletedApi = await apiMaster.softDeleteApiMaster({ apiId, userId });

        if (!deletedApi.status) return { status: false, message: "failed to delete the api" };

        return { status: true, message: "The api is deleted successfully" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = deleteApiMasterFn;