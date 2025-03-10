const toggleApiStatusFn = require("../../model/services/apiMaster/toggleApiStatusFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const toggleApiStatus = async (req, res, next) => {
    try {
        const { userId, apiId, clientId } = await sanitizeBody(req.body);
        const result = await toggleApiStatusFn({ userId, apiId, clientId });
        return res.status(200).json({ status:result?.status, message: result?.message });
    } catch (error) { 
        next(error);
    }
}

module.exports = toggleApiStatus;