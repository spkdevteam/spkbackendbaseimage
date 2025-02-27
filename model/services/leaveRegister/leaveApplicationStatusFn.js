const leaveApplicationStatusFn = async ({ userId, clientId}) => {
    try {
        return {status: true, message: "Status of leave application", data: "pending"}
    } catch (error) {
        return {status: false, message: error.message}
    }
}

module.exports = leaveApplicationStatusFn;