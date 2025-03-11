const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { clientIdValidation, mongoIdValidation } = require("../validation/validation")

const togglePagesMasterFn = async ({toggledByUserId, pageId, clientId}) =>{
    try{
        const validation = [
            clientIdValidation({clientId}),
            mongoIdValidation({_id:toggledByUserId, name:"toggledByUserId"}),
            mongoIdValidation({_id:pageId, name:"pageId"}),
        ];
        const error = validation.filter((e) => e && e.status === false);
                 console.log("validation error=>>>",error);
                
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        //establishing db connection
        const db = await getClientDatabaseConnection(clientId);
        const Page = await db.model("Page", pageMasterSchema);
        //invoking instance method
        const toggledPage = await Page.togglePagesMaster({toggledByUserId, pageId, clientId});
        console.log("toggledPagetoggledPagetoggledPage=>",toggledPage);
        if(!toggledPage?.status)  return { status: false, message: toggledPage?.message||"Failed to toggle Page!!" };
        return { status: true, message: "Page toggled successfully"
            // , data: toggledPage?.message
        };
    }
    catch(error){
        return { status: false, message: error?.message };
    }
}


module.exports = togglePagesMasterFn;