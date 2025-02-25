const createDutyAndResponsibilityFn = require("../../model/services/dutiesAndResponsibilities/createDutyAndResponsibilityFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createDutyAndResponsibility = async (req, res, next) => {
    try {
        const { deptname, designation, rules, documents, clientId} = await sanitizeBody(req.body);
        const result =  await createDutyAndResponsibilityFn({ deptname, designation, rules, documents, clientId});
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}


module.exports = createDutyAndResponsibility;