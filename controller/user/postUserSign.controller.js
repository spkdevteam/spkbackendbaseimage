const { generatejwtToken } = require("../../middleware/token/createToken")
const createUser = require("../../model/services/user/createUser")
const signin = require("../../model/services/user/signInUser")
const userSchema = require("../../model/userSchema")
const companySchema = require("../../model/company")
const setTokenCookie = require("../../utils/generateToken")
const sanitizeBody = require("../../utils/sanitizeBody")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const signup = async (req, res, next) => {

    try {
        const data = await sanitizeBody(req.body)




        const { _id = null, userId, firstName, lastName, profileImage, email, companyId, phone, password, gender, bloodGroup, address, documents, leaveDetails, designation, department, dateOfBirth, family, maritalStatus, city, state, country, ZipCode, loginOptions, clientId } = data
        console.log(data, loginOptions, '--------');
        const result = await createUser({_id, userId, firstName, lastName, profileImage, companyId, email, phone, password, gender, bloodGroup, address, documents, leaveDetails, dateOfBirth, designation, department, family, maritalStatus, city, state, country, ZipCode, loginOptions, clientId })
        console.log("the result:", result);
        return res.status(201).json({ status: result?.status, message: result?.message, data: result?.data })

    } catch (error) {
        next(error);
    }

}

const signInUser = async (req, res, next) => {
    try {
        const data = await sanitizeBody(req.body) || {}
        // const email = data?.email || data?.userId
        // const phone = data?.phone || data?.userId
        const { companyId, clientId, password, userId } = data
        console.log(companyId, clientId, password, userId);
        const result = await signin({ userId, companyId, clientId, password })

        // const user = result.data
        // const token = generatejwtToken({userData, companyData}) 
        // setTokenCookie(res, token)
        console.log("tokennnnnnnnnnn inside controller===>>", result?.token);
        res.cookie("token", result?.token, {
            // httpOnly: true,
            // sameSite: "strict", 
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
        return res.status(200).json({ status: result?.status, message: result.message, data: result?.data })

    } catch (error) {
        next(error)
    }
}

module.exports = { signup, signInUser }