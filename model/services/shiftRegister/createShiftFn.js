const createShiftFn = async ({ shiftName, startTime, endTime, companyId, clientId }) =>{
    try {
        return {status: true, message: "your shift is created", data: {
            shiftId: "67c04ca442adcc1853fa4646",
            companyId,
            shiftName,
            startTime,
            endTime
        }}
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = createShiftFn;