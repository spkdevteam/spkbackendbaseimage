const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")

require("dotenv").config()

const signInCompany = async({ req, clientId}) =>{
    try {
        if(!clientId) return {status: false, message: "Client ID is required"}

        //the signed up company in the db should be signed in as well
        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)

        //extracting data of companySchema from req.body
        const {email, contactNumber} = req.body

        if(!email || !contactNumber){
            return {status: false, message: "Email and Contact Number is required"}
        }

        const company = await Company.findOne({email})
        if(!company){
            return {status: false, message: "Compnay not found"}
        }

        return {status: true, message: "Company signed in ", data: {
            email: company.email,
            contactNumber: company.contactNumber 
        }}
    } catch (error) {
        console.log("Error signing in company", error);
        return {status: false, message: "Failed to sign in company", error: error.message}  
    }
}

module.exports = signInCompany