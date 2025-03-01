const editAPI = require("../../model/services/apiMaster/editApiMaster")
const toggleApiStatus = require("../../model/services/apiMaster/toggleApiStatus")
const sanitizeBody = require("../../utils/sanitizeBody")

const editAPIMaster = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {id, APIName, path, menuRouter, clientId} = data
        const result =await editAPI({id, APIName, path, menuRouter, clientId})
        return res.status(200).json({status: result.status, message: result.message})
    } catch (error) {
        next(error)
    }
}

const toggleApiMaster = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {clientId, id} = data
        const result = await toggleApiStatus({clientId, id})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}

module.exports = {editAPIMaster, toggleApiMaster}