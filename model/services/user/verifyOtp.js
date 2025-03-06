const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation } = require("../validation/validation");
const mailingOptions = require("../mailing/mailingOptions"); 
const textResponseForMailing = require("../mailing/textResponseForMailing"); 
const transporter = require("../mailing/nodemailerTransporter");
const { userSchema } = require("../../userSchema");

const verifyOtp = async ({ _id, otp, clientId }) => {
    try {
        //validating otp
        if (!otp || typeof otp !== "string" || !/\d{6}/.test(otp)) {
            return { status: false, message: "Invalid otp" };
        };

        //validating inputs
        const validating = [
            clientIdValidation({ clientId })
        ];

        const error = validating.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


        //initializing connection to the db and creating a model
        const db = await getClientDatabaseConnection(clientId);
        const User = await db.model("user", userSchema);

        //finding a user associated with this id
        const user = await User.findOne({ _id, deletedAt: null });
        if (!user) return { status: false, message: "Operation failed, try again" };
    

        if(user.otp === otp) {
            await transporter.sendMail(mailingOptions({toEmail: user.email, subject: "OTP verification", text: textResponseForMailing({ option: "verify"})}));
        }else {
            return { status: false, message: "Invalid otp!"};
        };

        return { status: true, message: "Otp is verified Successfully", _id: user._id };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = verifyOtp;