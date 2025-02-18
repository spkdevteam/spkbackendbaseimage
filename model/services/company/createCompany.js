const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")
const {nameValidation, incorporationNameValidation, cinNumberValidation, gstNumberValidation, cityValidation, stateValidation, countryValidation,zipCodeValidation, addressValidation} = require("../validation/companyValidation")
require("dotenv").config()

const createCompany = async ({name, incorporationName, cinNumber, gstNumber, prefix, Logo, email, contactNumber, city, state, country, ZipCode, address, clientId}) => {
    console.log(name,'rrrr');

    try {
        if(!clientId) return {status:false,message:'Some network credential are missing '}

        const validations = [
            nameValidation({name}),
            incorporationNameValidation({incorporationName}),
            cinNumberValidation({cinNumber}),
            gstNumberValidation({gstNumber}),
            countryValidation({country}),
            stateValidation({state}),
            cityValidation({city}),
            zipCodeValidation({ZipCode}),
            addressValidation({address})
        ]

        //check the validation error
        const error = validations.find(validate => validate !== undefined)

        if(error) return error

        //connecting to db to store company data
        const db =await getClientDatabaseConnection(clientId)
        console.log("log the db", db);
        
        const Company =await db.model('company',companySchema)
        console.log("log the company", Company);
        
        //generating the displayId
        const displayId = Math.abs(await getserialNumber("company", process.env.CLIENTID_FOR_USER, ""))
        //creat company
        const company = new Company({
            displayId,
            name, 
            incorporationName, 
            cinNumber, 
            gstNumber, 
            prefix, 
            Logo, 
            email, 
            contactNumber, 
            city, 
            state, 
            country, 
            ZipCode, 
            address
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