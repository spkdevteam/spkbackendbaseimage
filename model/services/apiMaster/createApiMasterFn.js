const { default: mongoose } = require("mongoose");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { apiSchema } = require("../../apiMaster");

const createApiMasterFn = async ({ _id=null, userId, apiName, apiPath, menuId, companyId, clientId }) => {
    try {
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id, try again"};
            case !mongoose.Types.ObjectId.isValid(menuId):
                return { status: false, message: "Invalid menu id, try again"};
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id, try again"};
        };

        const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: apiName, name: "Api Name: "})
        ];

        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return {status:false, message: error.map((e)=> e.message).join(", ")};


        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);

        const apiWithSimilarName = await apiMaster.findOne({ apiName, deletedAt: null });
        if(apiWithSimilarName) return { status:false, message: "This api name already exists"};

        const apiWithSimilarPath = await apiMaster.findOne({ apiPath, deletedAt: null });
        if(apiWithSimilarPath) return { status:false, message: "This api path already exists"};

        const api = await apiMaster.insertApiMaster({ _id, userId, apiName, apiPath, companyId, menuId });

        if(!api.status) return {status: false, message: api.message };

        return { status:true, message: "Api added successfully", data: api}
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = createApiMasterFn;