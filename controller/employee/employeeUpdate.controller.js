const updateEmployee = require("../../model/services/employee/updateEmployee")
const sanitizeBody = require("../../utils/sanitizeBody")

const employeeUpdate = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {firstName, lastName, companyId, designationId, joiningDate, roleId, documentId, email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address, isVerified, isActive, clientId, id} = data
        const result = await updateEmployee({firstName, lastName, companyId, designationId, joiningDate, roleId, documentId, email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address, isVerified, isActive, clientId, id})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        
    }
}
module.exports = employeeUpdate