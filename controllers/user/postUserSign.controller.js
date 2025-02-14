require('dotenv').config();
const sanitizeBody = require('../../utils/sanitizeBody');
const createUser = require('../../model/services/user/createUser');

const signup = async (req, res, next) => {

    try {
        const data =await sanitizeBody(req.body)
        const result =await createUser(data)
        console.log(result)
        return res.status(201).json({ status: result?.status, message:result?.message, data:result?.data })

    } catch (error) {
        next(error);
    }

}

module.exports = { signup };