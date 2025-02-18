const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")

const getCompanyId = async({req, clientId}) =>{
    try {
        if(!clientId) return {status: false, message: "Client ID is required"}

        //db connection
        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)

        //extracting the id from req.params
        const {id} = req.params

        //fetching the data by id
        const companyId = await Company.findById(id)

        if(companyId){
            return {status: true, message: "Company fetched by id", data: companyId}
        }else{
            return {status: false, message: "Could not fetched company by id", data: []}
        }
    } catch (error) {
        console.log("Error fetching company by id", error);
        return {status: false, message: "failed to fetch company by id", error: error.message}   
    }
}

module.exports = getCompanyId