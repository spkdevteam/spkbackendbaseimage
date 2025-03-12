const deletedCompany = require("../../model/services/company/deleteCompany")
const sanitizeBody = require("../../utils/sanitizeBody")

const deleteCompany = async (req, res, next) =>{
    try {
        
        const removeCompany = await sanitizeBody(req.params)
        console.log(removeCompany, "================================");
        const {id, clientId} = removeCompany
        const result = await deletedCompany({id, clientId})
        
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = deleteCompany
