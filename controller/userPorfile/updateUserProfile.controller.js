const profileUser = require("../../model/services/userProfile/profileUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const updateUserProfile = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {
            userId,
            clientId, 
            companyId,
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            age,
            city,
            state,
            country,
            ZipCode,
            address,
            isVerified,
            isActive} = data
            const result = await profileUser({
                userId,
                clientId, 
                firstName,
                lastName,
                profileImage,
                email,
                phone,
                age,
                city,
                state,
                country,
                ZipCode,
                address,
                companyId,
                isVerified,
                isActive})
                return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = updateUserProfile