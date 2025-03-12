const updateCompany = require("../../model/services/company/editCompany")
const sanitizeBody = require("../../utils/sanitizeBody")

const editCompany = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {id, clientId ,name, incorporationName, cinNumber, gstNumber, prefix, Logo, email, contactNumber, city, state, country,ZipCode,address} = data
        const result = await updateCompany({id, clientId ,name, incorporationName, cinNumber, gstNumber, prefix, Logo, email, contactNumber, city, state, country,ZipCode,address})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = editCompany