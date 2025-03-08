require("dotenv").config();
const { encodePassword } = require("../utils/testPassword");

const encodedPassword = encodePassword("Ayan@1997");

console.log("Encoded Password Token:", encodedPassword);
