const jwt = require("jsonwebtoken")

const generatejwtToken = ({ data, secretKey }) => {
    try {
        const signedData = jwt.sign({ data }, secretKey);
        console.log("jwt tokenised data is =>>", signedData);
        return signedData;
    } catch (error) {
        console.log("Error generating jwt:", error);
        return null;
    }
}

const verifyjwtToken = ({ data, secretKey }) => {
    try {
        const unSignedData = jwt.verify(data, secretKey);
        console.log("unbsigned data is ====>>>>>", unSignedData);
        return unSignedData;

    }
    catch (error) {
        console.log("Error generating jwt:", error);
        return null;
    }

}

module.exports = { generatejwtToken, verifyjwtToken }