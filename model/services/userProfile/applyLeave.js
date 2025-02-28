const applyLeave = async () =>{
    try {
        return {status: true, message: "Leave application created successfully"}
    } catch (error) {
        console.log("Error in applying for leave", error)
        return {status: false, message: "Failed to apply for leave", error: error.message}
    }
}
module.exports = applyLeave