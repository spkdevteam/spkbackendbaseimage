const { default: mongoose } = require("mongoose");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { apiSchema } = require("../../apiMaster");

const editApiMasterFn = async ({ userId, apiId, apiName, apiPath, clientId })=> {
    try {
        //checking the mongodb ids
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return {status: false, message: "Invalid user id"};
            case !mongoose.Types.ObjectId.isValid(apiId):
                return {status: false, message: "Invalid api id"};
        }

        //validating the other inputs
        const validation = [
            emptyStringValidation({ string: apiName, name: "api name: "}),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map((e)=> e.message).join(", ")};

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);

        //checking wheather the api name asked to change, is available or not
        const theNameAlreadytExists = await apiMaster.findOne({ apiName, deletedAt: null , _id: {$ne: apiId }});
        if(theNameAlreadytExists) return { status: false, message: "The api name is already in use"};

        //checking wheather the api path asked to change, is available or not
        const thePathAlreadyexists = await apiMaster.findOne({ apiPath, deletedAt: null, _id: { $ne: apiId }});
        if(thePathAlreadyexists) return { status: false, message: "The api path is already in use"};

        //finding one
        const api = await apiMaster.findOne({ _id: apiId, deletedAt: null });

        //returning if not found
        if(!api) return {status:false, message: "Network problem, try again"};

        //checking wheather it needs to edit or not
        if(api.apiName === apiName && api.apiPath === apiPath) return { status: false, message: "There is nothing to update"};

        //editing the api
        const editedApi = await apiMaster.updateApiMaster({ apiId, apiName, apiPath, userId });

        //checking wheather operation failed or not
        if(!editedApi.status) return { status: false, message: "Operation failed, try again"};

        return {status: true, message: "Api is updated"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = editApiMasterFn;