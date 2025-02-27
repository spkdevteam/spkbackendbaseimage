const createLeaveApplicationFn = async ({ userId, companyId, application, leaveType, clientId }) => {
    try {
        return {status: true, message: "Leave application is sent"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = createLeaveApplicationFn;