const deleteDutyAndResponsibilityFn = async ({ id, clientId })=>{
    try {
        return { status: true, message: "Duty deleted"};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = deleteDutyAndResponsibilityFn;