const clientIdValidation = ({ clientId }) => {
    if (!clientId || typeof clientId !== "string" || !/^[A-Za-z0-9]+$/.test(clientId)) {
        return { status: false, message: "Some networking problem" };
    }
    console.log(clientId, );
    
    // return { status: true, message:"Success"}
}

const firstNameValidation = ({firstName}) => {
    if (!firstName || typeof firstName !== 'string' || firstName.length < 3 || firstName > 40 || !/^[A-Za-z]+$/.test(firstName)) {
        return { status: false, message: "Invalid First Name" };
    }
}

const lastNameValidation = ({lastName}) => {
    if (!lastName || typeof lastName !== 'string' || lastName.length < 2 || lastName > 40 || !/^[A-Za-z]+$/.test(lastName)) {
        return { status: false, message: "Invalid Last Name" };
    }
}

const emailValidation = ({email}) => {
    if (!email || typeof email !== 'string' || email.length > 30 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return { status: false, message: "Invalid Email" };
    }
}

const phoneNumberValidation = ({phone}) => {
    if (!phone || typeof phone !== 'string' || phone.length < 10 || phone.length > 25 || !/^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(phone)) {
        return { status: false, message: "Invalid Phone" };
    }
}

const passwordValidation = ({password}) =>{
    if(!password || typeof password !== 'string' || password.length < 6 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{6,}$/.test(password)){
        return { status: false, message: "Invalid Password" };
    }  
}

const genderValidation = ({gender}) => {
    if (!gender || typeof gender !== 'string' || gender.length > 17 || gender.length < 4 
        || !["Male", "Female", "Other", "Prefer not to say"].includes(gender)) {
            return { status: false, message: "Invalid Gender" };
    }
}

const ageValidation = ({age}) => {
    if (!age || typeof age !== 'number' || age < 0 || age > 120) {
        return { status: false, message: "Invalid Age Try again" }
    }
}

const bloodGroupValidation = ({bloodGroup}) => {
    if (bloodGroup === undefined || bloodGroup === null || typeof bloodGroup !== 'string' || bloodGroup.length < 2 || bloodGroup.length > 3 || !/^(A|B|AB|O)[+-]$/.test(bloodGroup)) {
        return { status: false, message: "Invalid blood group" };
    }        
}

const cityValidation = ({city}) => {
    if (!city || typeof city !== 'string' || city.length < 1 || city.length > 20 || !/^[A-Za-z\s]+$/.test(city)) {
        return { status: false, message: "Invalid city name" };
    }       
}

const stateValidation = ({state}) => {
    if (!state || typeof state !== 'string' || state.length < 3 || state.length > 20 || !/^[A-Za-z\s]+$/.test(state)) {
        return { status: false, message: "Invalid state name" };
    }       
}

const countryValidation = ({country}) => {
    if (!country || typeof country !== 'string' || country.length < 3 || country.length > 20 || !/^[A-Za-z]+$/.test(country)) {
        return { status: false, message: "Invalid country name" };
    }
}
const zipCodeValidation = ({ZipCode}) => {
    if (!ZipCode || typeof ZipCode !== 'string' || ZipCode.length < 3 || ZipCode.length > 10 || !/^[a-zA-Z0-9\s,'-]*$/.test(ZipCode)) {
        return { status: false, message: "Invalid zipcode" };
    }
}


module.exports = { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, passwordValidation, clientIdValidation };