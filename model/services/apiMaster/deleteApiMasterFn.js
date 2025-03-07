const { apiSchema } = require("../../apiMaster");
const { getClientDatabaseConnection } = require("../../connection");

const deleteApiMasterFn = async ({ userId, apiId, clientId}) => {
    try {
        const validation = [];
        const error = validation.filter((e)=> e && e.status===false);
        if(error.length > 0 ) return { status: false, message: error.map((e)=> e.message).join(", ")};

        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);

        const apiDoNotExists = await apiMaster.findOne({ _id: apiId, deletedAt: null});

        if(!apiDoNotExists) return {status: false, message: "There no such api, try again"};


        const deletedApi = await apiMaster.softDeleteApiMaster({ apiId, userId });

        if(!deletedApi.status) return { status: false, message: "failed to delete the api"};

        return {status: true, message: "The api is deleted successfully"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = deleteApiMasterFn;