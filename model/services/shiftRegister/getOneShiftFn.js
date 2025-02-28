const getOneShiftFn = async ({ shiftId, companyId, clientId }) => {
    try {
        return {
            status: true, message: "Your shift is here.", data: {
                shiftId,
                companyId,
                shiftName: "Morning shift",
                startTime: "9:30:00 AM",
                endTime: "6:30:00 PM",
            }
        };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getOneShiftFn;