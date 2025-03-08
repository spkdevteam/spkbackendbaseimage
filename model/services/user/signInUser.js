const generatejwtToken = require("../../../middleware/token/createToken");
const setTokenCookie = require("../../../utils/generateToken");
const { companySchema } = require("../../company");
const { getClientDatabaseConnection } = require("../../connection");
const { emailValidation, passwordValidation, clientIdValidation, stringValidation, stringValidationWithSpace, mongoIdValidation, stringValidationWithNumber } = require("../validation/validation")
const { userSchema } = require("../../userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { rolesSchema } = require("../../roles");

const signin = async ({ userId, companyId, clientId, password }) => {  // Added 'res' as a parameter
    try {
        console.log("Received Encoded Password:", password);

        if (!password) {
            return { status: false, message: "Password is manadatory" };
        }

        if (!userId || userId.trim() === "") {
            return { status: false, message: "user credential is required" }
        }
        console.log("userIdddddddddddddd==>>>", userId);

        const validations = [
            // emailValidation({email: userId}),
            // stringValidationWithSpace({string: email, name: "Email"}),
            // passwordValidation({password: String(password)}), 
            clientIdValidation({ clientId }),

            stringValidationWithNumber({ string: userId, name: "userId" })

        ]
        if (companyId) {//validation for companyId is optional
            validations.push(mongoIdValidation({ _id: companyId }),);
        }

        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
        console.log(error, '->error');

        // const determineQuery = (identifier) => {
        //     const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //     const phoneReg = /^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;

        //     const query = { $or: [] };
        //     if (emailReg.test(identifier)) query.$or.push({ email: identifier });
        //     if (phoneReg.test(identifier)) query.$or.push({ phone: identifier });
        //     if (!emailReg.test(identifier) && !phoneReg.test(identifier) && identifier.trim().length > 0 ) {
        //         query.$or.push({ userName: identifier });
        //         console.log(identifier, "=================================");
        //     }

        //     return query;
        // };


        // Get database connection
        const db = await getClientDatabaseConnection(clientId);
        const Company = await db.model('company', companySchema)
        const User = db.model("User", userSchema);
        const Role = db.model("Role", rolesSchema)

        // const query = determineQuery(userId)
        // console.log(query);
        // if(query.status === false) return query
        // Check if user exists

        const user = await User.findOne(
            {
                $or: [
                    { "loginOptions.email": userId },
                    { "loginOptions.phone": userId },
                    { "loginOptions.userId": userId }
                ],
                deletedAt: null,
            })
            .populate('companyId')
            .select("password _id firstName lastName email phone address companyId");
        console.log(user, "<<============User data retrieved");

        if (!user) {
            return { status: false, message: "UserName not found" };
        }

        //decrypting the password field fetched from db:

        const roleFetch = await Role.find()
        //Decode JWT password
        console.log("password:====>>>>>", password);

        const designedPass = jwt.verify(password, process.env.PASSWORD_SECRET_KEY);
        // const decodedPassword = decoded?.password;
        // console.log("Stored Hashed Password:=>>>>>", user?.password);
        console.log("designed Password obj:====>>>", designedPass);

        console.log("designed Password:====>>>", designedPass?.password);

        // Compare password
        const isPasswordValid = await bcrypt.compare(designedPass?.password, user?.password);
        console.log(isPasswordValid, "==>>Password comparison result");

        if (!isPasswordValid) {
            return { status: false, message: "Wrong Password" };
        }


        // Generate JWT token

        // Ensure 'res' is available before setting token cookie
        const payload = {
            userId: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            phone: user?.phone,
            state: user?.address?.state,
            company : [{
                companyId : user?.companyId,
                companyName: user?.companyId?.name,
                contact: user?.companyId?.contactNumber,
                email: user?.companyId?.email
                    }]
        }
        const token = jwt.sign(payload, process.env.PASSWORD_SECRET_KEY, { expiresIn: "30d" }); //replace secret key with dynamic companyId in prod

        return {
            status: true,
            message: "User signed in successfully",
            token
        };
    } catch (error) {
        console.error("Error in sign-in function:", error);
        return { status: false, message: "Failed to sign in user", error: error.message };
    }
};

module.exports = signin;
