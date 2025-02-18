const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")

const getCompanyAll = async ({clientId}) =>{
    try {
        if(!clientId) return {status: false, message: "Client ID is required"}

        //fetch all companies from the db
        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)

        //fetch all compnaies
        const fetchAllCompany = await Company.find({})

        if(fetchAllCompany.length > 0){
            return {status: true, message: "Fetch all companies", data: fetchAllCompany}
        }else{
            return {status: false, message: "No companies found", data: []  }
        }
    } catch (error) {
        console.log("error fetching all companies", error);
        return {status: false, message: "Falied fetching companies", error: error.message}   
    }
}

module.exports = getCompanyAll