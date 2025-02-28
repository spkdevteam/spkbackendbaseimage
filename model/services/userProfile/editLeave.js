const editLeave = async () =>{
    try {
        return {status: true, message: "Leave application has been updated"}
    } catch (error) {
        console.log("Error in updating leave application in user profile", error);
        return {status: false, message: "Failed to update leave application in user profile", error: error.message}
    }
}
module.exports = editLeave