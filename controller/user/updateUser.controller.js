const editUser = require("../../model/services/user/edituser")
const sanitizeBody = require("../../utils/sanitizeBody")

const updateUser = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {
            id,
            clientId, 
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            password,
            gender,
            dateOfBirth,
            department, 
            designation,
            bloodGroup,
            family,
            maritalStatus,
            leaveDetails,
            documents,
            editedBy,
            loginOptions,
            address,
            isVerified,
            isActive} = data

        const result = await editUser({
            id,
            clientId, 
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            password,
            gender,
            dateOfBirth,
            department,
            designation,
            bloodGroup,
            maritalStatus,
            family,
            leaveDetails,
            documents,
            editedBy,
            loginOptions,
            address,
            isVerified,
            isActive})
        return res.status(200).json({status: result.status, message: result.message})
    } catch (error) {
       next(error) 
    }
}
module.exports = updateUser