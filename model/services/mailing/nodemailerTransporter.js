const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_FOR_NODEMAILER,
        pass: process.env.PW_FOR_NODEMAILER
    }
});

module.exports = transporter;