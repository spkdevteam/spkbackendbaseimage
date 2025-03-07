const editApiMasterFn = require("../../model/services/apiMaster/editApiMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editApiMaster = async (req, res, next) => {
    try {
        const { userId, apiId, apiName, apiPath, clientId } = await sanitizeBody(req.body);
        const result = await editApiMasterFn({ userId, apiId, apiName, apiPath, clientId });
        return res.status(200).json({ status:result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = editApiMaster;