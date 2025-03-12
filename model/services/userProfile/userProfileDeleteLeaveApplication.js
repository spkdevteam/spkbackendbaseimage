const userProfileDeleteLeaveApplication = async () =>{
    try {
        return {status: true, message: "Leave application delted successfully"}
    } catch (error) {
        console.log("Error in deleting leave application", error);
        return {status: false, message: "Failed to delete leave application", error: error.message}
    }
}
module.exports = userProfileDeleteLeaveApplication