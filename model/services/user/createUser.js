const { status } = require("express/lib/response")
const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, passwordValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation } = require("../validation/validation")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")
require("dotenv").config()

const createUser =async ({ firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId })=>{
    try {
        if(!clientId) return {status:false,message:'Some network credential are missing '}

        const validations = [
            firstNameValidation({firstName}),
            lastNameValidation({lastName}),
            emailValidation({email}),
            phoneNumberValidation({phone}),
            passwordValidation({password}),
            genderValidation({gender}),
            ageValidation({age}),
            bloodGroupValidation({bloodGroup}),
            cityValidation({city}),
            stateValidation({state}),
            countryValidation({country}),
            zipCodeValidation({ZipCode})

        ]

        //check the validation error
        const error = validations.find(validate => validate !== undefined)

        if(error) return error

        const db =await getClientDatabaseConnection(clientId)
        const User =await db.model('user',userSchema)

        const displayId = Math.abs(await getserialNumber("user", process.env.CLIENTID_FOR_USER, ""))
        const user = new User({
            displayId,
            companyId,
            firstName, 
            lastName, 
            profileImage, 
            email, 
            phone,
            password, 
            gender, 
            age, 
            bloodGroup, 
            city, 
            state, 
            country, 
            ZipCode, 
            address
        })

        const result = await user.save()
        console.log("user save result:", result);
        
        return {status:true,message:'User created successfully',data:{_id:result._id}}

        
    } catch (error) {
        console.log("Error in sign up user", error);
        return {status: false, message: "Failed to sign up user", error: error.message}
    }
}

module.exports = createUser