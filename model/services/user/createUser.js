const { getClientDatabaseConnection } = require("../../connection")
const { userSchema } = require("../../userSchema")
const { emailValidation, phoneNumberValidation, genderValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, clientIdValidation, stringValidation, stringValidationWithSpace, passwordValidation, validateAddress, validateLoginOptions, documentsValidation, dateValidation } = require("../validation/validation")
// const getserialNumber = require("../../serialNumber.js/getSerialNumber")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")

const { generatejwtToken, verifyjwtToken } = require("../../../middleware/token/createToken")

const createUser = async ({ _id = null, userId, firstName, lastName, profileImage, companyId, email, phone, password, gender, bloodGroup, address, documents, leaveDetails, dateOfBirth, designation, department, family, loginOptions, maritalStatus, state, city, country, ZipCode, clientId }) => {
    try {

        if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
            return { status: false, message: "Invalid Id" }
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return { status: false, message: "Invalid userId" }
        }
        const validations = [
            stringValidation({ string: firstName, name: "firstName: " }),
            stringValidation({ string: lastName, name: "lastName: " }),
            emailValidation({ email }),
            phoneNumberValidation({ phone }),
            documentsValidation({ documents }),
            stringValidation({ string: maritalStatus, name: "maritalStatus: " }),
            passwordValidation({ password: String(password) }),
            genderValidation({ gender }),
            // ageValidation({age}),
            bloodGroupValidation({ bloodGroup }),
            // cityValidation({city}),
            // stringValidationWithSpace({string: state, name: "state: "}),
            // countryValidation({country}),
            // zipCodeValidation({ZipCode}), 
            validateAddress({ address }),
            validateLoginOptions({ loginOptions }),
            dateValidation({ date: dateOfBirth }),
            clientIdValidation({ clientId })
        ]
        //check the validation error        
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        console.log(error, '->error');

        // const companyIdObjectId = mongoose.Schema.Types.ObjectId(companyId);
        // const designationObjectId = mongoose.Schema.Types.ObjectId(designation);
        // const departmentObjectId = mongoose.Schema.Types.ObjectId(department);

        const db = await getClientDatabaseConnection(clientId)
        const User = await db.model('user', userSchema)


        console.log(Object.keys(loginOptions)?.map((option) => ({ [option]: loginOptions[option] })), 'login-------------------OptionsloginOptions')

        //     const queryConditions = Object.keys(loginOptions)
        // .filter(option => loginOptions[option] !== null && loginOptions[option] !== undefined) // Ensure non-null/undefined values
        // .map(option => ({ [`loginOptions.${option}`]: loginOptions[option] })); 

        //     if (!Object.keys(loginOptions)?.length) return { status: false, message: 'minimum one login infoo is reqiered ' }
        //     const outResult = await User.findOne({
        //         deletedAt: null,
        //         loginOptions:queryConditions
        //     }).lean()

        //     console.log(outResult, 'ooooooooooooo')
        //     if(outResult){
        //         return {status: false, message: `${loginOptions}`}
        //     }
        for (key in loginOptions) {
            if (loginOptions[key]) {
                const query = {
                    [`loginOptions.${key}`]: loginOptions[key],
                    deletedAt: null
                };
                const alreadyExists = await User.findOne(query).lean();
                if (alreadyExists) {
                    return { status: false, message: `${key} already is in use!!` }
                }
            }
        }
        console.log(loginOptions[key], "loginOptions");
        // //remove this block later and replace pass by password inside verify(mimicing frontend):
        // const pass = generatejwtToken({ data: password, secretKey: companyId });
        // // const pass = jwt.sign({ password }, companyId);
        // console.log("pass=>>>>", pass);

        // // //remove




        // ///jwt Signed password is getting jwt verified first then getting hashed:
        // const unsignedRawPassword = verifyjwtToken({ data: pass, secretKey: companyId });
        // console.log("unsinedRawObj==>>", unsignedRawPassword);

        // // const unsignedRawPassword = jwt.verify(pass, companyId); //use password instead pass in prod
        // if (!unsignedRawPassword) {
        //     return { status: false, message: "Problem in JWT verification" }
        // }
        // //const passwordtoken = jwt.sign({ password }, process.env.PASSWORD_SECRET_KEY)
        // console.log(unsignedRawPassword, "==>>unsigned password");
        //hash the password 
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);
        // const newPassword = await bcrypt.hash(unsignedRawPassword?.data, salt)

        if (!newPassword) {
            return { status: false, message: "Problem in bcrypt hashing" }

        }

        //remove this later:mimicing frontend as testSigned will be sent form frontend during signin

        // const testSigned = jwt.sign({ password }, companyId);
        // console.log("testSignedtestSignedtestSigned----->>>>>>>>>>>>", testSigned);

        //


        // switch(true){
        //     case !mongoose.Types.ObjectId.isValid(companyId):
        //         return { status: false, message: "Invalid company reference"};
        //     case !mongoose.Types.ObjectId.isValid(department):
        //         return { status: false, message: "Invalid department reference"};
        //     case !mongoose.Types.ObjectId.isValid(designation):
        //         return { status: false, message: "Invalid designation reference"};
        // }
        if (!mongoose.Types.ObjectId.isValid(companyId) || !mongoose.Types.ObjectId.isValid(department) || !mongoose.Types.ObjectId.isValid(designation)) {
            return { status: false, message: "Inavlid reference" }
        }

        const displayId = await getserialNumber("user", clientId, "users")
        console.log("randommmmmmm=>>>>>", displayId)
        // const displayId = Math.floor(Date.now() / 1000);//for testing
        console.log(displayId, "=================================");
        const result = await User.insertUser({
            _id,
            userId,
            displayId,
            companyId,
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            password: newPassword,
            gender,
            bloodGroup,
            address,
            city,
            state,
            ZipCode,
            country,
            loginOptions,
            documents,
            leaveDetails,
            dateOfBirth,
            department,
            designation,
            maritalStatus,
            family
        })


        // console.log("user logged:",user);

        console.log("user save result:", result);
        if (!result?.status) return { status: false, message: 'User cant be created' }

        return { status: true, message: 'User created successfully', data: { _id: result.user._id } }
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createUser