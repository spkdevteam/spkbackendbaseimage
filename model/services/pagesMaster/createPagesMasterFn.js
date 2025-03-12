const { getClientDatabaseConnection } = require("../../connection")
const { pageMasterSchema } = require("../../pageMaster")
const { companySchema } = require("../../company")
const { stringValidationIncludingNumber, clientIdValidation, mongoIdValidation } = require("../validation/validation")

const createPagesMasterFn = async ({_id = null, menuName, pathName, reporting, createdByUserId, clientId, companyId}) =>{
    try{
        //validation
        const validation = [
            stringValidationIncludingNumber({string:menuName, name : "menuName: "}),
            stringValidationIncludingNumber({string:pathName, name : "pathName: "}),
            stringValidationIncludingNumber({string:reporting, name : "reporting: "}),
            clientIdValidation({clientId}),
            mongoIdValidation({_id:createdByUserId, name:"createdByUserId"}),
            mongoIdValidation({_id:companyId, name:"companyId"})
        ]
        if(_id)//if oldId exists
        {
            validation.push(mongoIdValidation({_id:_id, name:"oldId"}));  
        }
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
        const savedPage = await Page.insertPagesMaster({menuName, pathName, reporting, createdByUserId, _id, clientId, companyId});
        console.log("savedPagesavedPagesavedPage=>",savedPage);
        
        if(!savedPage?.status)  return { status: false, message: savedPage?.message||"Failed to insert Page!!" };
        return { status: true, message: "Page created successfully", data: savedPage?.pages?._id
        };
    }
    catch(error){
        return { status: false, message: error?.message };
    }
}

module.exports = createPagesMasterFn;

