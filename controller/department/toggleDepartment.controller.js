const departmentToggle = require("../../model/services/department/departmentToggle")
const sanitizeBody = require("../../utils/sanitizeBody")

const toggleDepartment = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {clientId, userId, departmentId} = data
        const result = await departmentToggle({clientId, userId, departmentId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = toggleDepartment