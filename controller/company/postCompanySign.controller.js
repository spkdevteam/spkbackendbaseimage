const createCompany = require("../../model/services/company/createCompany")
const sanitizeBody = require("../../utils/sanitizeBody")

const signup = async (req, res, next) =>{

    try {
        const data =await sanitizeBody(req.body)
        const {name, prefix, Logo, email, address, clientId} = data
        const contactNumber = data?.contactNumber || data?.phone
        const result =await createCompany({name, prefix, Logo, email, contactNumber, address, clientId})
        console.log("Result received:", result);
        
        return res.status(201).json({ status: result.status, message:result.message, data:result.data })

    } catch (error) {
        next(error);
    }
}

module.exports = signup