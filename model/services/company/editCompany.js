const mongoose = require("mongoose")
const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")
const { incorporationNameValidation, cinNumberValidation, gstNumberValidation } = require("../validation/companyValidation")
const { clientIdValidation, stringValidationWithSpace, countryValidation, stateValidation, cityValidation, zipCodeValidation, emailValidation, phoneNumberValidation } = require("../validation/validation")

const updateCompany = async ({id, clientId ,name, incorporationName, cinNumber, gstNumber, prefix, Logo, email, contactNumber, city, state, country,ZipCode,address}) =>{
    try {
        // const {id, clientId ,name, incorporationName, cinNumber, gstNumber, prefix, Logo, email, contactNumber, city, state, country,ZipCode,address} = data
        if (!id) {
            return { status: false, message: "Company ID is required" };
        }
        const validations = [
            stringValidationWithSpace({string: name, name: "name: "}),
            incorporationNameValidation({incorporationName}),
            cinNumberValidation({cinNumber}),
            gstNumberValidation({gstNumber}),
            emailValidation({email}),
            phoneNumberValidation({phone: contactNumber}),
            countryValidation({country}),
            stateValidation({state}),
            cityValidation({city}),
            zipCodeValidation({ZipCode}),
            stringValidationWithSpace({string: address, address: "address: "}),
            clientIdValidation({clientId})
        ]
        //check the validation error
        const error = validations.filter((e) => e && e.status == false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(",")}

        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)

        //check whether the id is valid or not
        if(!mongoose.Types.ObjectId.isValid(id)){
            return {status:false, message: "Invalid ID format"}
        }

        const companyExists = await Company.findOne({ gstNumber, _id: { $ne: id } })
        if(companyExists){
            return {status: false, message: "Company with this gstNumber already exists"}
        }

        const editedCompany = await Company.findByIdAndUpdate(id,{
             name, incorporationName, cinNumber, gstNumber, 
            prefix, Logo, email, contactNumber, city, state, country, 
            ZipCode, address 
        },
        {new: true}
    )
        if(!editedCompany){
            return {status: false, message: "Trouble in updating the company"}
        }
        return {status: true, message: "Company updated successfully"}
    } catch (error) {
        console.log("Error in editing Company",error);
        return {status: false, message: "Fail to edit company"}
    }
}
module.exports = updateCompany