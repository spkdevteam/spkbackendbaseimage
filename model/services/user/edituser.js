const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { clientIdValidation, stringValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, countryValidation, stringValidationWithSpace, zipCodeValidation } = require("../validation/validation")

const editUser = async ({id,
    clientId, 
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
    isVerified,
    isActive}) =>{
    try {

        const validations = [
            clientIdValidation({clientId}),
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
            zipCodeValidation({ZipCode})

        ]

        const error = validations.filter((e) => e && e.status == false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}
        console.log(error, "error ===========");

        const db = await getClientDatabaseConnection(clientId)
        const User = await db.model("user", userSchema)

        //checking whether user exists or not if exists then they can update else not
        // const userMail = await User.findOne({email})
        // if(userMail){
        //     return {status: false, message: "User with this email already exists"}
        // }
        // const userPhone = await User.findOne({phone})
        // if(userPhone){
        //     return {status: false, message: "User with this phone number already exists"}
        // }
        const updateUser = await User.updateOne({ _id: id, deletedAt: null}, {$set: { 
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
            isVerified,
            isActive}})
            //checking if the update is 
            if(updateUser.matchedCount < 1){
                return {status: false, message: "Oops try again"};
            }

            if(updateUser.modifiedCount < 1){
                return {status: false, message: "Operation failed"}
            }

            const savedUser = await User.findById(id)

            return {status: true, message: "user updated successfully", data: savedUser}
        
    } catch (error) {
        console.log("Error in updating user", error);
        return {status: false, message: "Fail to update the user", error: error.message}
        
    }
}

module.exports = editUser