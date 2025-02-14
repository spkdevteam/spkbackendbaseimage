const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")

require("dotenv").config()

const signin = async({clientId, req}) =>{
    try {
        if (!clientId) return {status: false, message: "Client ID is required"}

        //the signed in user will be created in the database
        const db = await getClientDatabaseConnection(clientId)
        const User = db.model("User", userSchema)

        //extracting the data from userSchema 
        const {email, phone, password} = req.body
        if(!email || !phone || !password){
            return {status: false, message: "Email, Phone and Password is required"}
        }

        //checking whether the user exits in the database or not
        const user = await User.findOne({email})
        if(!user){
            return {status: false, message: "User not found"}
        }

        //compare password
        if(!user || !(await user.comaprePassword(password))){
            return {status: false, message: "Invalid credentials"}
        }


        return {status: true, message: "User signed in successfully", data: {
            email: user.email,
            phone: user.phone,
            // password: user.password
        }}
    } catch (error) {
        console.log("Error in sign in user", error);
        return {status: false, message: "Failed to sign in user", error: error.message}
        
    }
}

module.exports = signin