const getOneApiMasterFn = require("../../model/services/apiMaster/getOneApiMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOneApiMaster = async (req, res, next) => {
    try {
        const { apiId, clientId } = await sanitizeBody(req.params);
        const result = await getOneApiMasterFn({ apiId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getOneApiMaster;