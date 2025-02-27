const userVerify = async ({isVerify}) =>{
    try {

        return {status: true, message: "User verified successfully"}
    } catch (error) {
        console.log("Error in verifying the user", error);
        return {status: false, message:"Failed to verify the user", error: error.message}
    }
}
module.exports = userVerify