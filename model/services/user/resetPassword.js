const { getClientDatabaseConnection } = require("../../connection");
const userSchema = require("../../userSchema");
const { clientIdValidation } = require("../validation/validation");
const bcryptjs = require("bcryptjs");

const resetPassword = async ({ _id, password, clientId }) => {
    try {
        if (!password) return { status: false, message: "Invalid password" };

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

        const hashedPassword = await bcryptjs.hash(password, 10);

        //changing the password
        user.password = hashedPassword;

        //saving the user
        await user.save();

        return { status: true, message: "Password has succesfully changed", _id: user._id }
    } catch (error) {
        return { status: false, message: error.message }
    }
}
module.exports = resetPassword;