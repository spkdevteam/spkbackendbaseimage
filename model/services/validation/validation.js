const res = require("express/lib/response");

const firstNameValidation = ({firstName}) => {
    if (!firstName || typeof firstName !== 'string' || firstName.length < 2 || firstName > 40 || !/^[A-Za-z]+$/.test(firstName)) {
        return res.status(400).json({ status: false, message: "Invalid First Name" });
    }
}

const lastNameValidation = ({lastName}) => {
    if (!lastName || typeof lastName !== 'string' || lastName.length < 2 || lastName > 40 || !/^[A-Za-z]+$/.test(lastName)) {
        return res.status(400).json({ status: false, message: "Invalid Last Name" });
    }
}

const emailValidation = ({email}) => {
    if (!email || typeof email !== 'string' || email.length > 30 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return res.status(400).json({ status: false, message: "Invalid Email" });
    }
}

const phoneNumberValidation = ({phone}) => {
    if (!phone || typeof phone !== 'string' || phone.length < 10 || phone.length > 25 || !/^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(phone)) {
        return res.status(400).json({ status: false, message: "Invalid Phone" });
    }
}

const genderValidation = ({gender}) => {
    if (!gender || typeof gender !== 'string' || gender.length > 17 || gender.length < 4 
        || !["Male", "Female", "Other", "Prefer not to say"].includes(gender)) {
            return res.status(400).json({ status: false, message: "Invalid Gender" });
    }
}

const ageValidation = ({age}) => {
    if (!age || typeof age !== 'number' || age < 0 || age > 120) {
        return res.status(400).json({ status: false, message: "Invalid Age Try again" })
    }
}

const bloodGroupValidation = ({bloodGroup}) => {
    if (bloodGroup === undefined || bloodGroup === null || typeof bloodGroup !== 'string' || bloodGroup.length < 2 || bloodGroup.length > 3 || !/^(A|B|AB|O)[+-]$/.test(bloodGroup)) {
        return res.status(400).json({ status: false, message: "Invalid blood group" });
    }        
}

const cityValidation = ({city}) => {
    if (!city || typeof city !== 'string' || city.length < 1 || city.length > 20 || !/^[A-Za-z\s]+$/.test(city)) {
        return res.status(400).json({ status: false, message: "Invalid city name" });
    }       
}

const stateValidation = ({state}) => {
    if (!state || typeof state !== 'string' || state.length < 3 || state.length > 20 || !/^[A-Za-z]+$/.test(state)) {
        return res.status(400).json({ status: false, message: "Invalid state name" });
    }       
}

const countryValidation = ({country}) => {
    if (!country || typeof country !== 'string' || country.length < 3 || country.length > 20 || !/^[A-Za-z]+$/.test(country)) {
        return res.status(400).json({ status: false, message: "Invalid country name" });
    }
}
const zipCodeValidation = ({ZipCode}) => {
    if (!ZipCode || typeof ZipCode !== 'number' || ZipCode.length < 3 || ZipCode.length > 10 || !/^[a-zA-Z0-9\s,'-]*$/.test(ZipCode)) {
        return res.status(400).json({ status: false, message: "Invalid zipcode" });
    }
}


module.exports = { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation };







