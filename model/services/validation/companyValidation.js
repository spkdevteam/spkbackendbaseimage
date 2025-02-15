const nameValidation = ({ name }) => {
    if (!name || typeof name !== 'string' || name.length < 3 || name.length > 40 || !/^[A-Za-z\s'-]+$/.test(name)) {
        return { status: false, message: "Invalid Name" };
    }
    return { status: true, message: "Valid Name" };
}

const incorporationNameValidation = ({ incorporationName }) => {
    if (!incorporationName || typeof incorporationName !== 'string' || incorporationName.length < 3 || incorporationName.length > 40 || !/^[A-Za-z\s'-]+$/.test(incorporationName)) {
        return { status: false, message: "Invalid Incorporation Name" };
    }
    return { status: true, message: "Valid Incorporation Name" };
}

const cinNumberValidation = ({ cinNumber }) => {
    if (!cinNumber || typeof cinNumber !== 'string' || cinNumber.length > 25 || !/^[a-zA-Z0-9_.-]+$/.test(cinNumber)) {
        return { status: false, message: "Invalid CIN Number" };
    }
    return { status: true, message: "Valid CIN Number" };
}

const gstNumberValidation = ({ gstNumber }) => {
    if (!gstNumber || typeof gstNumber !== 'string' || gstNumber.length > 15 || !/^[A-Za-z0-9]+$/.test(gstNumber)) {
        return { status: false, message: "Invalid GST Number" };
    }
    return { status: true, message: "Valid GST Number" };
}

const cityValidation = ({ city }) => {
    if (!city || typeof city !== 'string' || city.length < 1 || city.length > 20 || !/^[A-Za-z\s]+$/.test(city)) {
        return { status: false, message: "Invalid city name" };
    }
    return { status: true, message: "Valid city name" };
}

const stateValidation = ({ state }) => {
    if (!state || typeof state !== 'string' || state.length < 3 || state.length > 20 || !/^[A-Za-z\s]+$/.test(state)) {
        return { status: false, message: "Invalid state name" };
    }
    return { status: true, message: "Valid state name" };
}

const countryValidation = ({ country }) => {
    if (!country || typeof country !== 'string' || country.length < 3 || country.length > 20 || !/^[A-Za-z\s]+$/.test(country)) {
        return { status: false, message: "Invalid country name" };
    }
    return { status: true, message: "Valid country name" };
}

const zipCodeValidation = ({ ZipCode }) => {
    if (!ZipCode || typeof ZipCode !== 'string' || ZipCode.length < 3 || ZipCode.length > 10 || !/^[a-zA-Z0-9\s-]+$/.test(ZipCode)) {
        return { status: false, message: "Invalid zipcode" };
    }
    return { status: true, message: "Valid zipcode" };
}

const addressValidation = ({ address }) => {
    if (!address || typeof address !== 'string' || address.length < 5 || address.length > 100) {
        return { status: false, message: "Invalid address" };
    }
    return { status: true, message: "Valid address" };
}

module.exports = {nameValidation, incorporationNameValidation, cinNumberValidation, gstNumberValidation,addressValidation, cityValidation}
