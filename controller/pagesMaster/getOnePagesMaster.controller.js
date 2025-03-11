const getOnePagesMasterFn = require("../../model/services/pagesMaster/getOnePagesMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOnePagesMaster = async (req, res, next) => {
    try {
        const { clientId, pageId } = await sanitizeBody(req?.params);
        const result = await getOnePagesMasterFn({ clientId, pageId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    }
    catch (error) {
        next(error);
    }
}

module.exports = getOnePagesMaster;