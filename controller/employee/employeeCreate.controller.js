const createEmployee = require("../../model/services/employee/createEmployee")
const signInEmployee = require("../../model/services/employee/signInEmployee")
const sanitizeBody = require("../../utils/sanitizeBody")

const employeeCreate = async (req, res, next) => {
    try {
        const data = await sanitizeBody(req.body)
        const {firstName, lastName, companyId, designationId, joiningDate, roleId, documentId, email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address, isVerified, isActive, clientId} = data
        const result = await createEmployee({firstName, lastName, companyId, designationId, joiningDate, roleId, documentId, email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address, isVerified, isActive, clientId})
        return res.status(201).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
const employeeSignIn = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {employeeId, password, companyId, clientId} = data
        const result = await signInEmployee({employeeId, password, companyId, clientId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}

module.exports = {employeeCreate, employeeSignIn}