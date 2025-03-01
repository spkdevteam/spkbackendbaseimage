const leaveTypeGetAll = require("../../model/services/leaveType/leaveTypeGetAll");
const leaveTypeGetById = require("../../model/services/leaveType/leaveTypeGetById");
const sanitizeBody = require("../../utils/sanitizeBody");

const getAllLeaveType = async(req, res, next) =>{
    try {
        const {clientId, companyId} = await sanitizeBody(req.params)
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
        const result = await leaveTypeGetAll({ page, perPage, searchKey, clientId, companyId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data, metaData: result?.metaData})
    } catch (error) {
        next(error)
    }
}

const getByIdLeaveType = async (req, res, next) =>{
    try {
        const {clientId, companyId, leaveId} = await sanitizeBody(req.params)
        const result = await leaveTypeGetById({clientId, companyId, leaveId})
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllLeaveType, getByIdLeaveType}