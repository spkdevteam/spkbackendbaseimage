<<<<<<< HEAD
//validation for client id
=======
>>>>>>> origin/new_pragya
const clientIdValidation = ({ clientId }) => {
    if (!clientId || typeof clientId !== "string" || !/^[A-Za-z0-9]+$/.test(clientId)) {
        return { status: false, message: "Some networking problem" };
    }
<<<<<<< HEAD
    return { status: true, message: "Success" }
=======
    console.log(clientId, );
    
    // return { status: true, message:"Success"}
>>>>>>> origin/new_pragya
}

const firstNameValidation = ({firstName}) => {
    if (!firstName || typeof firstName !== 'string' || firstName.length < 2 || firstName > 40 || !/^[A-Za-z]+$/.test(firstName)) {
        return { status: false, message: "Invalid First Name" };
    }
    return { status: true, message: "Success" }
}

const lastNameValidation = ({lastName}) => {
    if (!lastName || typeof lastName !== 'string' || lastName.length < 2 || lastName > 40 || !/^[A-Za-z]+$/.test(lastName)) {
        return { status: false, message: "Invalid Last Name" };
    }
    return { status: true, message: "Success" }
}

const emailValidation = ({email}) => {
    if (!email || typeof email !== 'string' || email.length > 30 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log(email)
        return { status: false, message: "Invalid Email" };
    }
    return { status: true, message: "Success" }
}

const phoneNumberValidation = ({phone}) => {
    if (!phone || typeof phone !== 'string' || phone.length < 10 || phone.length > 25 || !/^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(phone)) {
        return { status: false, message: "Invalid Phone" };
    }
    return { status: true, message: "Success" }
}

const genderValidation = ({gender}) => {
    if (!gender || typeof gender !== 'string' || gender.length > 17 || gender.length < 4 
        || !["Male", "Female", "Other", "Prefer not to say"].includes(gender)) {
            return { status: false, message: "Invalid Gender" };
    }
    return { status: true, message: "Success" }
}

const ageValidation = ({age}) => {
    if (!age || typeof age !== 'number' || age < 0 || age > 120) {
        return { status: false, message: "Invalid Age Try again" };
    }
    return { status: true, message: "Success" }
}

const bloodGroupValidation = ({bloodGroup}) => {
    if (bloodGroup === undefined || bloodGroup === null || typeof bloodGroup !== 'string' || bloodGroup.length < 2 || bloodGroup.length > 3 || !/^(A|B|AB|O)[+-]$/.test(bloodGroup)) {
        return { status: false, message: "Invalid blood group" };
    }        
    return { status: true, message: "Success" }
}

const cityValidation = ({city}) => {
    if (!city || typeof city !== 'string' || city.length < 1 || city.length > 20 || !/^[A-Za-z\s]+$/.test(city)) {
        return { status: false, message: "Invalid city name" };
    }       
    return { status: true, message: "Success" }
}

const stateValidation = ({state}) => {
    if (!state || typeof state !== 'string' || state.length < 3 || state.length > 20 || !/^[A-Za-z]+$/.test(state)) {
        return { status: false, message: "Invalid state name" };
    }       
    return { status: true, message: "Success" }
}

const countryValidation = ({country}) => {
    if (!country || typeof country !== 'string' || country.length < 3 || country.length > 20 || !/^[A-Za-z]+$/.test(country)) {
        return { status: false, message: "Invalid country name" };
    }
    return { status: true, message: "Success" }
}
const zipCodeValidation = ({ZipCode}) => {
    if (!ZipCode || typeof ZipCode !== 'number' || ZipCode.length < 3 || ZipCode.length > 10 || !/^[a-zA-Z0-9\s,'-]*$/.test(ZipCode)) {
        return { status: false, message: "Invalid zipcode" };
    }
    return { status: true, message: "Success" }
}


<<<<<<< HEAD
module.exports = { clientIdValidation, firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation };







=======
module.exports = { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, passwordValidation, clientIdValidation };
>>>>>>> origin/new_pragya
