const jwt = require("jsonwebtoken");

const encodePassword = (password) => {
    if (!password) {
        throw new Error("Password is required");
    }
    return jwt.sign({ password }, process.env.PASSWORD_SECRET_KEY, { expiresIn: "5m" });
};

module.exports = { encodePassword };
