const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { stringValidationIncludingNumber, clientIdValidation, mongoIdValidation } = require("../validation/validation")

const createPagesMasterFn = async ({menuName, pathName, reporting, createdByUserId, oldId, clientId}) =>{
    try{
        //validation
        const validation = [
            stringValidationIncludingNumber({string:menuName, name : "menuName"}),
            stringValidationIncludingNumber({string:pathName, name : "pathName"}),
            stringValidationIncludingNumber({string:reporting, name : "reporting"}),
            clientIdValidation({clientId}),
            mongoIdValidation({_id:createdByUserId, name:"createdByUserId"})
        ]
        if(oldId)//if oldId exists
        {
            validation.push(mongoIdValidation({_id:oldId, name:"oldId"}));  
        }
        const error = validation.filter((e) => e && e.status === false);
         console.log("validation error=>>>",error);
        
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        //establishing db connection
        const db = await getClientDatabaseConnection(clientId);
        const Page = await db.model("Page", pageMasterSchema);
        //invoking instance method
        const savedPage = await Page.insertPagesMaster({menuName, pathName, reporting, createdByUserId, oldId, clientId});
        console.log("savedPagesavedPagesavedPage=>",savedPage);
        
        if(!savedPage?.status)  return { status: false, message: savedPage?.message||"Failed to insert Page!!" };
        return { status: true, message: "Page created successfully"
            // , data: savedPage?.message
        };
    }
    catch(error){
        return { status: false, message: error?.message };
    }
}

module.exports = createPagesMasterFn;

