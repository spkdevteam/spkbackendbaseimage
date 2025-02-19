const { getClientDatabaseConnection } = require("../../connection");
const userSchema = require("../../userSchema");
const { clientIdValidation } = require("../validation/validation");
const bcryptjs = require("bcryptjs");
const mailingOptions = require("../mailing/mailingOptions"); 
const textResponseForMailing = require("../mailing/textResponseForMailing"); 
const transporter = require("../mailing/nodemailerTransporter");

const resetPassword = async ({ _id, otp, password, clientId }) => {
    try {
        if (!password) return { status: false, message: "Invalid password" };
        if(!otp) return { status: false, message: "Invalid Otp"};

        const validating = [
            clientIdValidation({ clientId })
        ]
        
        const error = validating.filter((e)=> e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //initializing connection to the db and creating a model
        const db = await getClientDatabaseConnection(clientId);
        const User = await db.model("user", userSchema);

        //checking the users existence
        const user = await User.findOne({ _id });

        //checking if user is there
        if(!user) return { status: false, message: "Some networking problem"}
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);

        //changing the password
        user.password = hashedPassword;
        if(user.otp === null) return { status:false, message: "Invalid Operation"};
        if(user.otp !== otp) return { status: false, message: "Invalid OTP"};
        user.otp = null;

        //saving the user
        const savedUser = await user.save();


        if(savedUser.otp === null){
            await transporter.sendMail(mailingOptions({ toEmail: user.email, subject: "Your password is changed successfully", text: textResponseForMailing({ option: "reset"})}));
        }else{
            return {status: false, message: "Failed to change the password try again"};
        }

        return { status: true, message: "Password has succesfully changed", _id: user._id }
    } catch (error) {
        return { status: false, message: error.message }
    }
}
module.exports = resetPassword;