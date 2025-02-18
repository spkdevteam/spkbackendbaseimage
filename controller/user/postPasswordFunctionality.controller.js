const sanitizeBody = require("../../utils/sanitizeBody");
const forgotPassword = require('../../model/services/user/forgotPassword');
const resetPassword = require('../../model/services/user/resetPassword');
const verifyOtp = require("../../model/services/user/verifyOtp");

const forgot_password = async (req, res, next)=> {
    try {
        const { emailId, clientId } = await sanitizeBody(req.body);
        const result = await forgotPassword({ emailId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, _id: result?._id});
    } catch (error) {
        next(error);
    }
}

const verify_otp = async (req, res, next)=> {
    try {
        const { _id, otp, clientId } = await sanitizeBody(req.body);
        const result = await verifyOtp({ _id, otp, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, _id: result?._id});
    } catch (error) {
        next(error);
    }
}

const reset_password = async (req, res, next)=> {
    try {
        //const { token } = req.cookies;
        const { _id, password, clientId } = await sanitizeBody(req.body);
        const result = await resetPassword({ _id , password, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, _id: result?._id});
    } catch (error) {
        next(error);
    }
}

module.exports = { forgot_password, verify_otp, reset_password };