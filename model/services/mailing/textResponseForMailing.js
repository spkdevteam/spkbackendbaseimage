const textResponseForMailing = ({ option, otp = null }) => {
    switch (option) {
        case "forgot":
            return `Dear User,
            ${otp} is your One-Time Password (OTP)for logging into certificate manager. PLEASE DO NOT SHARE WITH ANYONE.
Regards,
Team SPK Technosoft`;
        case "verify":
            return `Dear User,
            Your OTP has verified successfully with certificate manager.
Regards,
Team SPK Technosoft`;
        case "reset":
            return `Dear User,
            Your Password has updated successfully with certificate manager.
Regards,
Team SPK Technosoft`;
    }
    return "Internal error";
}

module.exports = textResponseForMailing;