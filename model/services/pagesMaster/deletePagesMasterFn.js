const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { clientIdValidation, mongoIdValidation } = require("../validation/validation")

const deletePagesMasterFn = async ({deletedByUserId, pageId, clientId}) =>{
    try{
        const validation = [
            clientIdValidation({clientId}),
            mongoIdValidation({_id:deletedByUserId, name:"deletedByUserId"}),
            mongoIdValidation({_id:pageId, name:"pageId"}),
        ];
        const error = validation.filter((e) => e && e.status === false);
                 console.log("validation error=>>>",error);
                
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        //establishing db connection
        const db = await getClientDatabaseConnection(clientId);
        const Page = await db.model("Page", pageMasterSchema);
        //invoking instance method
        const deletedPage = await Page.softDeletePagesMaster({deletedByUserId, pageId, clientId});
        console.log("deletedPagedeletedPagedeletedPage=>",deletedPage);
        if(!deletedPage?.status)  return { status: false, message: deletedPage?.message||"Failed to delete Page!!" };
        return { status: true, message: "Page deleted successfully"
            // , data: deletedPage?.message
        };
    }
    catch(error){
        return { status: false, message: error?.message };
    }
}


module.exports = deletePagesMasterFn;