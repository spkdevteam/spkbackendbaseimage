const updateUserByDesignation = require("../../model/services/user/updateUserByDesignation")
const sanitizeBody = require("../../utils/sanitizeBody")

const updateUserDesignation = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {userId, firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,designationId, clientId} = data
        const result = await updateUserByDesignation({userId,firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,designationId, clientId})
        return res.status(200).json({status: result?.status, message: result?.message})
    } catch (error) {
        next(error)
    }
}
module.exports = updateUserDesignation