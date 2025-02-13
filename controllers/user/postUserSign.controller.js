require('dotenv').config();
const { default: mongoose } = require("mongoose");
const { initializeDB } = require('../../routes/main.routes');
const { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation } = require('../../model/services/validation/validation');
const sanitizeBody = require('../../utils/sanitizeBody');
const createUser = require('../../model/services/user/createUser');

const signup = async (req, res, next) => {

    try {
        const data =await sanitizeBody(req.body)
        const result =await createUser(data)
        return res.status(201).json({ status: result.status, message:result.message, data:result.data })

    } catch (error) {
        next(error);
    }

}

module.exports = { signup };