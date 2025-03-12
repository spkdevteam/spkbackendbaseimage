const deleteApiMasterFn = require("../../model/services/apiMaster/deleteApiMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteApiMaster = async (req, res, next) => {
    try {
        const { apiId, clientId } = await sanitizeBody(req.params);
        const { userId } = await sanitizeBody(req.body);
        const result = await deleteApiMasterFn({  userId, apiId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteApiMaster;
