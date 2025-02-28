require("dotenv").config();
const mailOptions = ({ toEmail, subject, text }) => {
    return {
        from: process.env.EMAIL_FOR_NODEMAILER,
        to: toEmail,
        subject,
        text
    }
}

module.exports = mailOptions;