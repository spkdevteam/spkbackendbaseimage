const clientIdValidation = ({ clientId }) => {
    if (!clientId || typeof clientId !== "string" || !/^[A-Za-z0-9]+$/.test(clientId)) {
        return { status: false, message: "Some networking problem" };
    }
    return { status: true, message:"Success"}
}

const nameValidation = ({ name }) => {
    if (!name || typeof name !== 'string' || name.length < 3 || name.length > 40 || !/^[A-Za-z0-9\s&.,'-]+$/.test(name)) {
        console.log("Validation Failed for:", name);
        return { status: false, message: "Invalid Name" };
    }
}

const incorporationNameValidation = ({ incorporationName }) => {
    if (!incorporationName || typeof incorporationName !== 'string' || incorporationName.length < 3 || incorporationName.length > 40 || !/^[A-Za-z\s'-]+$/.test(incorporationName)) {
        return { status: false, message: "Invalid Incorporation Name" };
    }
}

const cinNumberValidation = ({ cinNumber }) => {
    if (!cinNumber || typeof cinNumber !== 'string' || cinNumber.length > 25 || !/^[a-zA-Z0-9_.-]+$/.test(cinNumber)) {
        return { status: false, message: "Invalid CIN Number" };
    }
}

const gstNumberValidation = ({ gstNumber }) => {
    if (!gstNumber || typeof gstNumber !== 'string' || gstNumber.length > 15 || !/^[A-Za-z0-9]+$/.test(gstNumber)) {
        return { status: false, message: "Invalid GST Number" };
    }
}

const cityValidation = ({ city }) => {
    if (!city || typeof city !== 'string' || city.length < 1 || city.length > 20 || !/^[A-Za-z\s]+$/.test(city)) {
        return { status: false, message: "Invalid city name" };
    }
}

const stateValidation = ({ state }) => {
    if (!state || typeof state !== 'string' || state.length < 3 || state.length > 20 || !/^[A-Za-z\s]+$/.test(state)) {
        return { status: false, message: "Invalid state name" };
    }
}

const countryValidation = ({ country }) => {
    if (!country || typeof country !== 'string' || country.length < 3 || country.length > 20 || !/^[A-Za-z\s]+$/.test(country)) {
        return { status: false, message: "Invalid country name" };
    }
}

const zipCodeValidation = ({ ZipCode }) => {
    if (!ZipCode || typeof ZipCode !== 'string' || ZipCode.length < 3 || ZipCode.length > 10 || !/^[a-zA-Z0-9\s-]+$/.test(ZipCode)) {
        return { status: false, message: "Invalid zipcode" };
    }
}

const addressValidation = ({ address }) => {
    if (!address || typeof address !== 'string' || address.length < 5 || address.length > 100) {
        return { status: false, message: "Invalid address" };
    }
}

module.exports = {nameValidation, incorporationNameValidation, cinNumberValidation, gstNumberValidation,addressValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, clientIdValidation}
