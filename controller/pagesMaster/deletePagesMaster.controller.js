const deletePagesMasterFn = require("../../model/services/pagesMaster/deletePagesMasterFn")
const sanitizeBody = require("../../utils/sanitizeBody")

const deletePage = async (req, res, next) =>{
    try{
        const {pageId, clientId} = await sanitizeBody(req?.params);
    const {userId} =  await sanitizeBody(req?.body);//userId is being pushed bu middleWare and later will be handled by token sent from frontend
    const result = await deletePagesMasterFn({deletedByUserId:userId, pageId, clientId});
    return res.status(200).json({status:result?.status, message: result?.message
        // , data: result?.data
    });
    }
    catch(error){
        next(error);
    }
} 

module.exports = deletePage;
