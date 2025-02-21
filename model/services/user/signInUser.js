const generatejwtToken = require("../../../middleware/token/createToken");
const setTokenCookie = require("../../../utils/generateToken");
const companySchema = require("../../company");
const { getClientDatabaseConnection } = require("../../connection");
const { emailValidation, passwordValidation, clientIdValidation, stringValidation } = require("../validation/validation")
const userSchema = require("../../userSchema");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const signin = async ({ data }) => {  // Added 'res' as a parameter
    try {
        const { userId, password, companyId, clientId} = data;
        console.log(data, "data---------------");

        // Validate required fields first
        // if (!clientId) return { status: false, message: "Client ID is required" };
        // if (!email || !password) {
        //     return { status: false, message: "Email, Password are required" };
        // }

        const validations = [
            emailValidation({email: userId}),
            stringValidation({string: password, name: "password: "}), 
            clientIdValidation({clientId})

        ]

        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")};
        console.log(error,'->error');

        // Get database connection
        const db = await getClientDatabaseConnection(clientId);
        const company =await db.model('company',companySchema)
        const User = db.model("User", userSchema);

        // Check if user exists
        const user = await User.findOne({ email: userId }).populate("companyId", "_id");
        console.log(user, "User data retrieved");

        if (!user) {
            return { status: false, message: "User not found" };
        }

        // Compare password
        const isPasswordValid = bcrypt.compare(password, user.password);
        console.log(isPasswordValid, "Password comparison result");

        if (!isPasswordValid) {
            return { status: false, message: "Invalid credentials" };
        }

        if(companyId){
            // Verify if the user belongs to the provided company
            if (!user.companyId || user.companyId?._id.toString() !== companyId) {
                console.log(user, companyId, "Company ID mismatch");
                return { status: false, message: "User does not belong to this company" };
            }
        }


        // Generate JWT token
 
        // Ensure 'res' is available before setting token cookie
 
        return {
            status: true,
            message: "User signed in successfully",
            data: {
                _id: user._id,
                userName: {
                    userId: user.email
                },
                // phone: user.phone,
                clientId,
                ...(companyId && user.companyId && {companyId: user.companyId._id})
            },
        };
    } catch (error) {
        console.error("Error in sign-in function:", error);
        return { status: false, message: "Failed to sign in user", error: error.message };
    }
};

module.exports = signin;
