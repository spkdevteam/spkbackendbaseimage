const generatejwtToken = require("../../../middleware/token/createToken")
const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")

require("dotenv").config()

const signin = async({clientId, req}) =>{
    try {
        if (!clientId) return {status: false, message: "Client ID is required"}

        //the signed up user stored in the db should be signed in as well 
        const db = await getClientDatabaseConnection(clientId)
        const User = db.model("User", userSchema)

        //extracting the data of userSchema from req.body 
        const {email, phone, password, companyId} = req.body
        if(!email || !phone || !password || !companyId){
            return {status: false, message: "Email, Phone, Password and Company ID is required"}
        }

        //checking whether the user exits in the database or not
        const company = db.model('company',companySchema)
        const user = await User.findOne({email}).populate( 'companyId','_id' )
        console.log("User fetched:", user); // Log the entire user object
        // console.log("companyId field:", user?.companyId); // Check if companyId is populated
        console.log("companyId type:", typeof user?.companyId); // Check if it's an object or just an ID
        if(!user){
            return {status: false, message: "User not found"}
        }

        //compare password
        if(!user || !(await user.comparePassword(password))){
            return {status: false, message: "Invalid credentials"}
        }

        //checking whether the user belongs to the company or not 
        if(!user?.companyId || user?.companyId?._id.toString() !== companyId ){
            console.log(user, companyId, "company id");

            
            return {status: false, message: "User does not belong to this company"}
        }

        const token = await generatejwtToken(user._id)
        return {status: true, message: "User signed in successfully", data: {
            email: user.email,
            phone: user.phone,
            companyId: user.companyId._id,
            token
            // password: user.password
        }}
    } catch (error) {
        console.log("Error in sign in user", error);
        return {status: false, message: "Failed to sign in user", error: error.message}
        
    }
}

module.exports = signin