const displayHoliday = require("../../model/services/userProfile/displayHoilday")
const sanitizeBody = require("../../utils/sanitizeBody")

const displayHolidayUserProfile = async (req, res, next) =>{
    try {
        const {clientId, userId, companyId} = await sanitizeBody(req.params)
        const result = await displayHoliday({clientId, userId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = displayHolidayUserProfile