const leaveApplicationDetailsEditFn = async ({ userId, isApproved, companyId, clientId }) => {
    try {
        return { status: true, message: "Leave application is approved" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = leaveApplicationDetailsEditFn;