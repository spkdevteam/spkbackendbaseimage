const { getClientDatabaseConnection } = require("../../connection");
const userSchema = require("../../userSchema");
const { emailValidation, clientIdValidation } = require("../validation/validation");

const fotgotPassword = async ({ emailId, clientId }) => {
    try {
        //validating inputs
        const validating = [
            emailValidation({ email:emailId }),
            clientIdValidation({ clientId })
        ]
        
        const error = validating.filter((e)=> e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const User = await db.model("user", userSchema);

        //finding a user
        const user = await User.findOne({ email: emailId});

        //checking availability of user
        if(!user) return { status: false, message: "No user exists with this email"};

        //generating otp
        const otp = Math.floor(100000 + Math.random()*899999).toString();

        //assigning the otp
        user.otp = otp;

        //temporary logging out the otp instead of sending email
        console.log(otp);

        //saving the user
        await user.save();

        return { status: true, message: "Email is sent if user exists", _id: user._id }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = fotgotPassword;