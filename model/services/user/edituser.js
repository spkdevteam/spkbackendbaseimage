const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { clientIdValidation, stringValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, countryValidation, stringValidationWithSpace, zipCodeValidation, passwordValidation } = require("../validation/validation")

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
            passwordValidation({password: String(password)}),
            genderValidation({gender}),
            ageValidation({age}),
            bloodGroupValidation({bloodGroup}),
            cityValidation({city}),
            stringValidationWithSpace({string: state, name: "state: "}),
            countryValidation({country}),
            zipCodeValidation({ZipCode})

        ]

        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ")};
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
        const existingUser = await User.findOne({ _id: id, deletedAt: null })
        if (!existingUser) {
            return { status: false, message: "User not found or already deleted" }
        }
        console.log("Existing User Found:", existingUser);
        const updateUser = await User.findOneAndUpdate({ _id: id, deletedAt: null}, {$set: { 
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
            isActive}},
            {new: true}
        )
        if (!updateUser) {
            return { status: false, message: "Oops, try again" }
          }
      
          return { status: true, message: "User updated successfully", data: updateUser }
        
    } catch (error) {
        console.log("Error in updating user", error);
        return {status: false, message: "Fail to update the user", error: error.message}
        
    }
}

module.exports = editUser