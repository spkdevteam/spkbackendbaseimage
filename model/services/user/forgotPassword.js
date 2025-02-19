const { getClientDatabaseConnection } = require("../../connection");
const userSchema = require("../../userSchema");
const transporter = require("../mailing/nodemailerTransporter");
const { emailValidation, clientIdValidation } = require("../validation/validation");
const mailingOptions = require("../mailing/mailingOptions");
const textResponseForMailing = require("../mailing/textResponseForMailing");

const fotgotPassword = async ({ emailId, clientId }) => {
    try {
        //validating inputs
        const validating = [
            emailValidation({ email: emailId }),
            clientIdValidation({ clientId })
        ]

        const error = validating.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const User = await db.model("user", userSchema);

        //finding a user
        const user = await User.findOne({ email: emailId });

        //checking availability of user
        if (!user) return { status: false, message: "No user exists with this email" };

        //generating otp
        const otp = Math.floor(100000 + Math.random() * 899999).toString();

        //assigning the otp
        user.otp = otp;
        user.isVerified = false;

        //saving the user
        const savedUser = await user.save();

        if (savedUser.otp !== null) {
            await transporter.sendMail(mailingOptions({ toEmail: emailId, subject: "Password reset OTP", text: textResponseForMailing({ option: "forgot", otp }) }));
        } else {
            return { status: false, message: "Failed to set the otp retry" }
        }


        return { status: true, message: "Otp sent to the registered email id", _id: user._id }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = fotgotPassword;