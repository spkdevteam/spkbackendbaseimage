const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, passwordValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, clientIdValidation } = require("../validation/validation")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")

const createUser =async ({data})=>{
    try {
        const {firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId} = data
        // console.log(firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,typeof(clientId));
        console.log(clientId);
        
        // if(!clientId) return {status:false,message:'Some network credential are missing '}
        // if(!email) return {status: false, message: "Email is required"}
        // if(!phone) return {status: false, message: "Phone is required"}

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
            zipCodeValidation({ZipCode}), 
            clientIdValidation({clientId})
        ]
        //establishing connection to database
         
        //check the validation error

        console.log(validations,'444444');
        
        const error = validations.find(validate => !validate.status)
        console.log(error,'->error');
        
        if(error) return error

        const db =await getClientDatabaseConnection(clientId)
        const User =await db.model('user',userSchema)

        const alreadyExists = await User.findOne({email})

        if(alreadyExists){
            return {status: false, message: "User already exists with this email"}
        }

        const displayId = Math.abs(await getserialNumber("user", clientId , ""))
        const user = new User({
            displayId,
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
            address,
            // clientId
        })
        console.log("user logged:",user);
        
        const result = await user.save()
        console.log("user save result:", result);
        
        return {status:true,message:'User created successfully', data:{_id:result._id}}

        
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createUser;
