const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation } = require("../validation/validation");

const getCompanyId = async({clientId, id}) =>{
    try {
        const validations = [
            clientIdValidation({clientId})

        ]
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")};
        console.log(error,'->error');

        //db connection
        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)

        //fetching the data by id
        const companyId = await Company.findOne({_id: id, $or: [{deletedAt: null}]})

        if(companyId){
            return {status: true, message: "Company fetched by id", data: companyId}
        }else{
            return {status: false, message: "Company not found or may have been deleted", data: []}
        }
    } catch (error) {
        console.log("Error fetching company by id", error);
        return {status: false, message: "failed to fetch company by id", error: error.message}   
    }
}

module.exports = getCompanyId