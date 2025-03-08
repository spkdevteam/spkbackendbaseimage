const mongoose = require("mongoose");
const clientIdValidation = ({ clientId }) => {
    if (!clientId || typeof clientId !== "string" || clientId.length !== 24 || !/^[A-Za-z0-9]+$/.test(clientId)) {
        return { status: false, message: "Some networking problem" };
    }
    return { status: true, message: "Success" };
}

const emailValidation = ({ email }) => {
    if (!email || typeof email !== 'string' || email.length > 30 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log(email)
        return { status: false, message: "Invalid Email" };
    }
    return { status: true, message: "Success" };
}

const phoneNumberValidation = ({ phone }) => {
    if (!phone || typeof phone !== 'string' || phone.length < 10 || phone.length > 25 || !/^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(phone)) {
        return { status: false, message: "Invalid Phone" };
    }
    return { status: true, message: "Success" }
}

const mongoIdValidation = ({ _id }) => {
    if (!_id || !mongoose.Types.ObjectId.isValid(_id)) {
        return { status: false, message: "Invalid id" }
    }
    return { status: true, message: "Success" }
}

// const passwordValidation = ({password}) =>{
//     if(!password || typeof password !== 'string' || password.length < 6){
//         return { status: false, message: "Invalid Password" };
//     }  
//     return { status: true, message:"Success"}
// }

const genderValidation = ({ gender }) => {
    if (!gender || typeof gender !== 'string' || gender.length > 17 || gender.length < 4
        || !["Male", "Female", "Other", "Prefer not to say"].includes(gender)) {
        return { status: false, message: "Invalid Gender" };
    }
    return { status: true, message: "Success" };
}

const ageValidation = ({ age }) => {
    if (!age || typeof age !== 'number' || age < 0 || age > 120) {
        return { status: false, message: "Invalid Age Try again" };
    }
    return { status: true, message: "Success" }
}

const bloodGroupValidation = ({ bloodGroup }) => {
    if (bloodGroup === undefined || bloodGroup === null || typeof bloodGroup !== 'string' || bloodGroup.length < 2 || bloodGroup.length > 3 || !/^(A|B|AB|O)[+-]$/.test(bloodGroup)) {
        return { status: false, message: "Invalid blood group" };
    }
    return { status: true, message: "Success" }
}

const cityValidation = ({ city }) => {
    if (!city || typeof city !== 'string' || city.length < 1 || city.length > 20 || !/^[A-Za-z\s]+$/.test(city)) {
        return { status: false, message: "Invalid city name" };
    }
    return { status: true, message: "Success" }
}

const stateValidation = ({ state }) => {
    if (!state || typeof state !== 'string' || state.length < 3 || state.length > 20 || !/^[A-Za-z]+$/.test(state)) {
        return { status: false, message: "Invalid state name" };
    }
    return { status: true, message: "Success" }
}

const countryValidation = ({ country }) => {
    if (!country || typeof country !== 'string' || country.length < 3 || country.length > 20 || !/^[A-Za-z]+$/.test(country)) {
        return { status: false, message: "Invalid country name" };
    }
    return { status: true, message: "Success" }
}

const zipCodeValidation = ({ ZipCode }) => {
    if (!ZipCode || typeof ZipCode !== 'string' || ZipCode.length < 3 || ZipCode.length > 10 || !/^[a-zA-Z0-9\s,'-]*$/.test(ZipCode)) {
        return { status: false, message: "Invalid zipcode" };
    }
    return { status: true, message: "Success" }
}


const stringValidation = ({ string, name = "" }) => {
    if (!string || typeof (string) !== "string" || string.length <= 1 || string.length > 40 || !/^[A-Za-z]+$/.test(string)) {
        return { status: false, message: `Invalid ${name}${string}` }
    }
    return { status: true, message: "Success" };
}

const stringValidationWithNumber = ({ string, name = "" }) => {
    if (!string || typeof (string) !== "string" || string.length <= 1 || string.length > 40 || !/^[A-Za-z0-9+.@_&-]+$/.test(string)) {
        return { status: false, message: `Invalid ${name}${string}` }
    }
    return { status: true, message: "Success" };
}

const emptyStringValidation = ({ string, name = "" }) => {
    if (typeof string !== "string" || string.length > 500 || !/^[A-Za-z0-9_\-,.'!?;()": ]*$/.test(string)) {
        return { status: false, message: `Invalid ${name}${string}` };
    }
    return { status: true, message: "Success" };
}

const booleanValidation = ({ boolean, name = "" }) => {
    if ((boolean !== "true" && boolean !== "false") && (boolean !== true && boolean !== false)) {
        return { status: false, message: `Invalid ${name}${boolean}` };
    }
}



const passwordValidation = ({ password }) => {

    if (!password || typeof password !== "string" || password.length < 6 || password.length > 100 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/.test(password)) {

        return { status: false, message: "Invalid password" }
    }
    return { status: true, message: "Success" }
}


// module.exports = { clientIdValidation, stringValidation, emptyStringValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, booleanValidation, passwordValidation };

const stringValidationWithEmptyString = ({ string, name = "" }) => {
    // Allow empty string
    if (string === "") {
        return { status: true, message: "Success" }
    }

    // Validate only if string is provided
    if (!string || typeof string !== "string" || string.length <= 1 || string.length > 40 || !/^[A-Za-z0-9\s]+$/.test(string)) {
        return { status: false, message: `Invalid ${name}${string ? `: ${string}` : ""}` }
    }

    return { status: true, message: "Success" }
};
const EmptyStringValidation = ({ string, name = "" }) => {
    if (typeof string !== "string" || string.length > 500 || !/^[A-Za-z0-9_\-,.'!?;()": ]*$/.test(string)) {
        return { status: false, message: `Invalid ${name}${string}` };
    }
    return { status: true, message: "Success" };
}
const stringValidationWithSpace = ({ string, name = "" }) => {
    if (!string || typeof string !== "string" || string.length <= 1 || string.length > 40 || !/^[A-Za-z0-9&.,''\s-]+$/.test(string)) {
        return { status: false, message: `Invalid ${name}${string}` }
    }
    return { status: true, message: "Success" }
}

const validateAddress = ({ address }) => {
    if (!Array.isArray(address) || address.length === 0) {
        return { status: false, message: "Address is invalid or missing" }
    }

    const addressObj = address[0]

    const stateValidation = stringValidationWithSpace({ string: addressObj.state, name: "State" })
    if (!stateValidation.status) {
        return stateValidation.message
    }

    const cityValidation = stringValidationWithSpace({ string: addressObj.city, name: "City" })
    if (!cityValidation.status) {
        return cityValidation.message
    }

    const countryValidation = stringValidationWithSpace({ string: addressObj.country, name: "Country" })
    if (!countryValidation.status) {
        return countryValidation.message
    }

    const ZipCodeValidation = stringValidationWithSpace({ string: addressObj.ZipCode, name: "ZpiCode" })
    if (!ZipCodeValidation.status) {
        return ZipCodeValidation.message
    }

    return { status: true, message: "Success" }
}

const validateLoginOptions = ({ loginOptions }) => {
    if (!loginOptions?.email && !loginOptions?.phone && !loginOptions?.userId) {
        return { status: false, message: "At least one of the field either emial or phone or userId is required" }
    }

    if (loginOptions?.email && typeof (loginOptions.email) !== 'string') {
        return { status: false, message: "Use valid email address" }
    }

    if (loginOptions?.email.length > 30 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginOptions?.email)) {
        console.log(loginOptions?.email)
        return { status: false, message: "Invalid Email" };
    }

    if (loginOptions?.phone && typeof (loginOptions?.phone) !== 'string') {
        return { status: false, message: "Use valid phone number" }
    }

    if (loginOptions?.phone.length < 10 || loginOptions?.phone.length > 25 || !/^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(loginOptions?.phone)) {
        return { status: false, message: "Invalid Phone" };
    }

    if (typeof (loginOptions?.userId) !== 'string' && loginOptions?.userId) {
        return { statis: false, message: "Use valid userId" }
    }

    return { status: true, message: "Success" }

}


module.exports = { clientIdValidation, mongoIdValidation, stringValidationWithNumber, stringValidationWithEmptyString, stringValidation, EmptyStringValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, booleanValidation, stringValidationWithSpace, passwordValidation, validateAddress, validateLoginOptions }; 
