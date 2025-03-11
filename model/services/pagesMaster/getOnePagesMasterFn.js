const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { clientIdValidation, mongoIdValidation } = require("../validation/validation");

const getOnePagesMasterFn = async ({clientId, pageId}) =>{
    try{
         const validation = [
            clientIdValidation({ clientId }),
            mongoIdValidation({_id:pageId, name:"pageId" })
        ];
        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map(e=>e.message).join(", ")};

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const PageMasterModelObj = await db.model("Page", pageMasterSchema);

        const PageMasterDoc = await PageMasterModelObj.findOne({ _id: pageId, deletedAt: null });
        if(!PageMasterDoc) return { status: false, message: "Requested pageMaster either deleted or doesn't exist!!" };

        return { status: true, message: "Requested pageMaster fetched successfully", data: PageMasterDoc };

    }
    catch(error){
        return { status: false, message: error.message };
    }
}

module.exports = getOnePagesMasterFn;
