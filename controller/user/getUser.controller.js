const {getUserAll} = require("../../model/services/user/getUser");
const getUserId = require("../../model/services/user/getUserById");

const userSchema = require("../../model/userSchema");
const sanitizeBody = require("../../utils/sanitizeBody");
require("dotenv").config()

const getAllUser = async (req, res, next) =>{
    try {
        const {clientId} = await sanitizeBody(req.params)
        const query = await sanitizeBody(req.query)
        const cleanQuery = {
            page: query.page ? query.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: query.perPage ? query.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: query.searchKey ? query.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
         const { page, perPage, searchKey} = cleanQuery
         const result = await getUserAll({ page, perPage, searchKey, clientId})
         return res.status(200).json({status: result.status, message: result.message, data: result?.data, metaData: result?.metaData })
    } catch (error) {
        next(error)
    }
}

const getUserById = async(req, res, next) =>{
    try {
        const user = await sanitizeBody(req.params);
        const {clientId, id} = user
        const result = await getUserId({clientId, id})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUser, getUserById }