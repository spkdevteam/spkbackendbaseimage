const incorporationNameValidation = ({ incorporationName }) => {
    if (!incorporationName || typeof incorporationName !== 'string' || incorporationName.length < 3 || incorporationName.length > 40 || !/^[A-Za-z\s'-]+$/.test(incorporationName)) {
        return { status: false, message: "Invalid Incorporation Name" };
    }
    return { status: true, message:"Success"}
}

const cinNumberValidation = ({ cinNumber }) => {
    if (!cinNumber || typeof cinNumber !== 'string' || cinNumber.length > 25 || !/^[a-zA-Z0-9_.-]+$/.test(cinNumber)) {
        return { status: false, message: "Invalid CIN Number" };
    }
    return { status: true, message:"Success"}
}

const gstNumberValidation = ({ gstNumber }) => {
    if (!gstNumber || typeof gstNumber !== 'string' || gstNumber.length > 15 || !/^[A-Za-z0-9]+$/.test(gstNumber)) {
        return { status: false, message: "Invalid GST Number" };
    }
    return { status: true, message:"Success"}
}



module.exports = {incorporationNameValidation, cinNumberValidation, gstNumberValidation}
