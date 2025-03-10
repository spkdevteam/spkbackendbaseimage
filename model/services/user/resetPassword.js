const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation, passwordValidation } = require("../validation/validation");
const bcryptjs = require("bcryptjs");
const mailingOptions = require("../mailing/mailingOptions"); 
const textResponseForMailing = require("../mailing/textResponseForMailing"); 
const transporter = require("../mailing/nodemailerTransporter");
const { userSchema } = require("../../userSchema");

const resetPassword = async ({ _id, otp, password, clientId }) => {
    try {
        if(!otp) return { status: false, message: "Invalid Otp"};

        const validating = [
            clientIdValidation({ clientId }),
            passwordValidation({password})
        ]
        
        const error = validating.filter((e)=> e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //initializing connection to the db and creating a model
        const db = await getClientDatabaseConnection(clientId);
        const User = await db.model("user", userSchema);

        //checking the users existence
        const user = await User.findOne({ _id, deletedAt: null });
        

        //checking if user is there
        if(!user) return { status: false, message: "Some networking problem"};

        //creating hashedPassword
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //if user is there, checking wheather the user has got the otp, to change the password
        if(user.otp === null) return { status:false, message: "Invalid Operation"};
        if(user.otp !== otp) return { status: false, message: "Invalid OTP"};


        //saving the user
        const savedOrNot = await User.updateOne({ _id, deletedAt: null}, { password: hashedPassword, otp: null });

        if(savedOrNot.modifiedCount < 1) return { status: false, message: "Operation failed try again"};

        const savedUser = await User.findOne({ _id });

        if(savedUser.otp === null){
            await transporter.sendMail(mailingOptions({ toEmail: user.email, subject: "Your password is changed successfully", text: textResponseForMailing({ option: "reset"})}));
        }else{
            return {status: false, message: "Failed to change the password try again"};
        };

        return { status: true, message: "Password has succesfully changed", _id: savedUser._id };
    } catch (error) {
        return { status: false, message: error.message };
    }
}
module.exports = resetPassword;