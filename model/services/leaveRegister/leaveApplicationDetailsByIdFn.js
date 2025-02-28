const leaveApplicationDetailsByIdFn = async ({ userId, companyId, clientId }) => {
    try {
        return { status: true, message: "Details of the leave applictaion", data: {
            userId,
            companyId,
            application: "The entire leave application will come up in here",
            isApproved: "true"
        }};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = leaveApplicationDetailsByIdFn;