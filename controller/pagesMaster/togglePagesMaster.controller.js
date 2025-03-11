const togglePagesMasterFn = require("../../model/services/pagesMaster/togglePagesMasterFn")
const sanitizeBody = require("../../utils/sanitizeBody")

const togglePage = async (req, res, next) =>{
    try{
        const {userId, pageId, clientId} = await sanitizeBody(req?.body);
        const result = await togglePagesMasterFn({toggledByUserId:userId, pageId, clientId});
        return res.status(200).json({status:result?.status, message: result?.message
            // , data: result?.data
        });
    }
    catch(error){
        next(error);
    }
}

module.exports = togglePage;
