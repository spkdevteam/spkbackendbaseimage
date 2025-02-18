const createCompany = require("../../model/services/company/createCompany")
const signInCompany = require("../../model/services/company/signInCompany")
const sanitizeBody = require("../../utils/sanitizeBody")

require("dotenv").config()

const signup = async (req, res, next) =>{

    try {
        const data =await sanitizeBody(req.body)
        const result =await createCompany(data)
        console.log("Result received:", result);
        
        return res.status(201).json({ status: result.status, message:result.message, data:result.data })

    } catch (error) {
        next(error);
    }
}

const signin = async(req, res, next) =>{
    try {
        const result = await signInCompany({clientId: process.env.CLIENTID_FOR_USER, req})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = {signup, signin}