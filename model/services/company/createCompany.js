const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")
const {incorporationNameValidation, cinNumberValidation, gstNumberValidation} = require("../validation/companyValidation")
const { stringValidationWithSpace, clientIdValidation, countryValidation, stateValidation, cityValidation, zipCodeValidation, emailValidation, phoneNumberValidation  } = require("../validation/validation")
require("dotenv").config()

const createCompany = async ({name, incorporationName, cinNumber, gstNumber, prefix, Logo, email, contactNumber, city, state, country, ZipCode, address, clientId}) => {
    
    try {
        const validations = [
            stringValidationWithSpace({string: name, name: "name: "}),
            // incorporationNameValidation({incorporationName}),
            // cinNumberValidation({cinNumber}),
            emailValidation({email}),
            gstNumberValidation({gstNumber}),
            // countryValidation({country}),
            phoneNumberValidation({phone: contactNumber}),
            stateValidation({state}),
            // cityValidation({city}),
            // zipCodeValidation({ZipCode}),
            stringValidationWithSpace({string: address, address: "address: "}),
            clientIdValidation({clientId})
        ]

        console.log(validations, "rrrrrrrr");
        

        //check the validation error
        const error = validations.filter((e) => e && e.status == false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(",")}

        //connecting to db to store company data
        const db =await getClientDatabaseConnection(clientId)
        console.log("log the db", db);
        
        const Company =await db.model('company',companySchema)
        console.log("log the company", Company);

        const companyExists = await Company.findOne({gstNumber})
        if(companyExists){
            return {status: false, message: "Company already exists"}
        }
        
        //generating the displayId
        const displayId = Math.abs(await getserialNumber("company", clientId, ""))
        //creat company
        const company = new Company({
            displayId,
            name, 
            // incorporationName, 
            // cinNumber, 
            // gstNumber, 
            prefix, 
            Logo, 
            email, 
            contactNumber, 
            // city, 
            // state, 
            // country, 
            // ZipCode, 
            address,
            clientId
        })

        const result = await company.save()

        console.log("company save result:", result);
        
        return {status:true,message:'Company created successfully',data:{_id:result._id}}

        
    } catch (error) {
        console.log("Error in createing company", error);
        return {status: false, message: "Failed to create company", error: error.message}
    }
}

module.exports = createCompany