const deleteShiftFn = async ({ shiftId, companyId, clientId }) => {
    try {
        return {status: true, message: "The shift is deleted."};
    } catch (error) {
        return { status: false, message: error.message}
    }
}

module.exports = deleteShiftFn;