const companySchema = require("../../company");
const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation } = require("../validation/validation");


const deletedCompany = async ({id, clientId}) =>{
    try {
        console.log(clientId);
        
        const validations = [
            clientIdValidation({clientId})
        ]
        
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")};
        console.log(error,'->error'); 

        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)
        const companyExists = await Company.findById(id)

        if(!companyExists){
            return {status: false, message: "Company is not found"}
        }

        if(companyExists.deletedAt !== null){
            return {status: false, message: "This company is deleted"}
        }
        const softDelete = await Company.findByIdAndUpdate(id, {deletedAt: new Date()}, {new: true})
        if (!softDelete) {
            return { status: false, message: "Failed to delete company" };
        }
        return {status: true, message: "Company deleted successfully", data: softDelete}

    } catch (error) {
        console.error("Error in deletedCompany:", error)
        return { status: false, message:"Fail to delete company", error: error.message }
    }
}

module.exports = deletedCompany