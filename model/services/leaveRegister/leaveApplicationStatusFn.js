const leaveApplicationStatusFn = async ({ userId, companyId, status, clientId}) => {
    try {
        return {status: true, message: "Status of leave application", data: `Status, changed to ${status}`};
    } catch (error) {
        return {status: false, message: error.message}
    }
}

module.exports = leaveApplicationStatusFn;