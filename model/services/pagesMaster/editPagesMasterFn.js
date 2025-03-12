const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { companySchema } = require("../../company")
const { stringValidationIncludingNumber, clientIdValidation, mongoIdValidation } = require("../validation/validation")

const editPagesMasterFn = async ({ menuName, pathName, reporting, editedByUserId, pageId, clientId, companyId}) =>{
    try{
        const validation = [
            stringValidationIncludingNumber({string:menuName, name : "menuName"}),
            stringValidationIncludingNumber({string:pathName, name : "pathName"}),
            stringValidationIncludingNumber({string:reporting, name : "reporting"}),
            clientIdValidation({clientId}),
            mongoIdValidation({_id:editedByUserId, name:"editedByUserId"}),
            mongoIdValidation({_id:pageId, name:"pageId"}),
            mongoIdValidation({_id:companyId, name: "companyId"})
        ];
        const error = validation.filter((e) => e && e.status === false);
                 console.log("validation error=>>>",error);
                
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        //establishing db connection
        const db = await getClientDatabaseConnection(clientId);
        const Page = await db.model("Page", pageMasterSchema);
        const Company = await db.model("Company", companySchema);

        //company availibility checking:
        const fetchedCompany = await Company.findOne({_id : companyId, deletedAt : null});
        if(!fetchedCompany) return {status : false , message : "company doesn't exist or deleted!!"}


        //invoking instance method
        const editedPage = await Page.editPagesMaster({menuName, pathName, reporting, editedByUserId, pageId, clientId, companyId});
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