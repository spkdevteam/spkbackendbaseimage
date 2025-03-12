require("dotenv").config()
const jwt = require("jsonwebtoken")
const {Role} = require("../../model/roles")

const generatejwtToken = async ({userData, companyData}) =>{
    try {
        const userRole = await Role.findOne({ companyId: companyData.companyId, deletedAt: null }).lean();

        if (!userRole) {
            return { status: false, message: "User role not found" };
        }

        //generate token
        const userPayload = {
            firstName: userData.firstName,
            lastname: userData.lastName,
            address: userData.address.state,
            phone: userData.phone,
        }

        const companyPayload = {
            company: [
                {
                    companyId: companyData.companyId,
                    name: companyData.name,
                    phone: companyData.phone,
                    email: companyData.email
                }
            ]
        }

        const payload = {
            ...userPayload,
            ...companyPayload,
            roles: userRole
        }

        const secretKey = companyData.companyId
        const token =  jwt.sign(payload, secretKey, {expiresIn: "7d"})
        return token
    } catch (error) {
        console.log("Error generating jwt:", error);
        return null
    }
}

module.exports = {generatejwtToken}