const { getClientDatabaseConnection } = require("../../connection")
const { userSchema } = require("../../userSchema")
const { clientIdValidation, stringValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, countryValidation, stringValidationWithSpace, loginOptions, zipCodeValidation, passwordValidation, validateAddress, validateLoginOptions, mongoIdValidation, documentsValidation, dateOfBirthValidation, dateValidation } = require("../validation/validation")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const editUser = async ({ id,
    clientId,
    firstName,
    lastName,
    profileImage,
    email,
    phone,
    password,
    gender,
    dateOfBirth,
    loginOptions,
    documents,
    department,
    designation,
    leaveDetails,
    family,
    maritalStatus,
    bloodGroup,
    address,
    editedBy,
    isVerified,
    isActive }) => {
    try {

        const validations = [
            clientIdValidation({ clientId }),
            stringValidation({ string: firstName, name: "firstName: " }),
            stringValidation({ string: lastName, name: "lastName: " }),
            emailValidation({ email }),
            phoneNumberValidation({ phone }),
            passwordValidation({password: String(password)}),
            genderValidation({ gender }),
            documentsValidation({documents}),
            // mongoIdValidation({clientId}),
            mongoIdValidation({ _id: designation }),
            mongoIdValidation({ _id: department }),
            mongoIdValidation({_id: editedBy}),
            stringValidation({string: maritalStatus, name: "maritalStatus: " }),
            validateAddress({ address }),
            validateLoginOptions({ loginOptions }),
            bloodGroupValidation({ bloodGroup }),
            dateValidation({date: dateOfBirth})
            // stringValidationWithSpace({string: state, name: "state: "})
        ]

        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
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

        // let updatedPassword = existingUser.password
        // if (password) {
        //     const salt = await bcrypt.genSalt(10)
        //     updatedPassword = await bcrypt.hash(password, salt)
        // }

        //password handling:
        //remove this block later and replace pass by password inside verify(mimicing frontend):
        const pass = jwt.sign({ password }, process.env.PASSWORD_SECRET_KEY);
        console.log("pass=>>>>", pass);

        //remove




        ///jwt Signed password is getting jwt verified first then getting hashed:
        const unsignedRawPassword = jwt.verify(pass, process.env.PASSWORD_SECRET_KEY);//use password instead pass in prod
        if (!unsignedRawPassword) {
            return { status: false, message: "Problem in JWT verification" }
        }
        console.log(unsignedRawPassword, "==>>unsigned password");
        //hash the password 
        const salt = await bcrypt.genSalt(10)
        const newPassword = await bcrypt.hash(unsignedRawPassword?.password, salt)
        if (!newPassword) {
            return { status: false, message: "Problem in bcrypt hashing" }

        }





        const updateUser = await User.updateUser({
            userId: id,
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            password: newPassword,
            gender,
            bloodGroup,
            dateOfBirth,
            loginOptions,
            address,
            documents,
            leaveDetails,
            designation,
            department,
            maritalStatus,
            family,
            editedBy,
            isVerified,
            isActive
        }
        )
        // console.log("checking==>>>>>>>", updateUser?.status)
        if (!updateUser?.status) {
            return { status: false, message: updateUser?.message }
        }

        return { status: true, message: "User updated successfully" }

    } catch (error) {
        console.log("Error in updating user", error);
        return { status: false, message: "Fail to update the user", error: error.message }

    }
}

module.exports = editUser