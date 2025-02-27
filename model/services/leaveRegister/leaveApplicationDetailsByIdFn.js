const leaveApplicationDetailsByIdFn = async ({ userId, clientId }) => {
    try {
        return { status: true, message: "Details of the leave applictaion", data: {
            userId: "67b32661425c6067035df2f7",
            application: "The entire leave application will come up in here",
            isAproved: "true"
        }};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = leaveApplicationDetailsByIdFn;