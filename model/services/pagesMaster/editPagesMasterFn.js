const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { stringValidationIncludingNumber, clientIdValidation, mongoIdValidation } = require("../validation/validation")

const editPagesMasterFn = async ({ menuName, pathName, reporting, editedByUserId, pageId, clientId}) =>{
    try{
        const validation = [
            stringValidationIncludingNumber({string:menuName, name : "menuName"}),
            stringValidationIncludingNumber({string:pathName, name : "pathName"}),
            stringValidationIncludingNumber({string:reporting, name : "reporting"}),
            clientIdValidation({clientId}),
            mongoIdValidation({_id:editedByUserId, name:"editedByUserId"}),
            mongoIdValidation({_id:pageId, name:"pageId"}),
        ];
        const error = validation.filter((e) => e && e.status === false);
                 console.log("validation error=>>>",error);
                
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        //establishing db connection
        const db = await getClientDatabaseConnection(clientId);
        const Page = await db.model("Page", pageMasterSchema);
        //invoking instance method
        const editedPage = await Page.editPagesMaster({menuName, pathName, reporting, editedByUserId, pageId, clientId});
        console.log("editedPageeditedPageeditedPage=>",editedPage);
        
        if(!editedPage?.status)  return { status: false, message: editedPage?.message||"Failed to edit Page!!" };
        return { status: true, message: "Page edited successfully"
            // , data: editedPage?.message
        };
    }
    catch{error}
    {
        return { status: false, message: error?.message };
    }

}

module.exports = editPagesMasterFn;