const { status } = require("express/lib/response")
const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, clientIdValidation, stringValidation, stringValidationWithSpace } = require("../validation/validation")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")
const bcrypt = require("bcryptjs")
require("dotenv").config()

const createUser =async ({data})=>{
    try {
        const {firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId} = data
        // console.log(firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,typeof(clientId));
        console.log(clientId);
        
        // if(!clientId) return {status:false,message:'Some network credential are missing '}
        // if(!email) return {status: false, message: "Email is required"}
        // if(!phone) return {status: false, message: "Phone is required"}

        const validations = [
            stringValidation({string: firstName, name: "firstName: "}),
            stringValidation({string: lastName, name: "lastName: "}),
            emailValidation({email}),
            phoneNumberValidation({phone}),
            stringValidation({string: password, name: "password: "}),
            genderValidation({gender}),
            ageValidation({age}),
            bloodGroupValidation({bloodGroup}),
            cityValidation({city}),
            stringValidationWithSpace({string: state, name: "state: "}),
            countryValidation({country}),
            zipCodeValidation({ZipCode}), 
            clientIdValidation({clientId})

        ]

        //check the validation error

        console.log(validations,'444444');
        
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")};
        console.log(error,'->error');

        const db =await getClientDatabaseConnection(clientId)
        const User =await db.model('user',userSchema)

        const alreadyExists = await User.findOne({email})

        if(alreadyExists){
            return {status: false, message: "User already exists with this email"}
        }

        //hash the password 
        const salt =await bcrypt.genSalt(10)
        const newPassword = await bcrypt.hash(password, salt)

        const displayId = Math.abs(await getserialNumber("user", clientId , ""))
        const user = new User({
            displayId,
            companyId,
            firstName, 
            lastName, 
            profileImage, 
            email, 
            phone,
            password: newPassword, 
            gender, 
            age, 
            bloodGroup, 
            city, 
            state, 
            country, 
            ZipCode, 
            address,
            // clientId
        })
        console.log("user logged:",user);
        
        const result = await user.save()
        console.log("user save result:", result);
        
        return {status:true,message:'User created successfully', data:{_id:result._id}}

        
    } catch (error) {
        console.log("Error in sign up user", error);
        return {status: false, message: "Failed to sign up user", error: error.message}
    }
}

module.exports = createUser