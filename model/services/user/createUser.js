const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation } = require("../validation/validation")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")

const createUser =async ({ firstName, lastName, profileImage="https://demo.jpg", email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address="address",clientId })=>{
    try {
        if(!clientId) return {status:false,message:'Some network credential are missing '}

        //all validations
        firstNameValidation(firstName);
        lastNameValidation(lastName);
        emailValidation(email);
        phoneNumberValidation(phone);
        genderValidation(gender);
        ageValidation(age);
        bloodGroupValidation(bloodGroup);
        cityValidation(city);
        stateValidation(state);
        countryValidation(country);
        zipCodeValidation(ZipCode);

        //establishing connection to database
        const db =await getClientDatabaseConnection(clientId);
        const User =await db.model('user',userSchema);

        //generating diplay id
        const displayId = await getserialNumber("User", clientId, "");

        //creating a new object to save
        const user = new User({
            displayId,
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            gender,
            age,
            bloodGroup,
            city,
            state,
            country,
            ZipCode,
            address
        })

        //saving the object
        // await user.save();
        const result = await user.save();
        return {status:true,message:'User created successFully',data:{_id:result?._id}};
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = createUser;