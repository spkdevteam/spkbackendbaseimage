const editShiftFn = async ({ shiftId, shiftName, startTime, endTime, companyId, clientId }) => {
    try {
        return {status: true, message: "The shift is updated"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = editShiftFn;