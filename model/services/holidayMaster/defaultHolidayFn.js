const defaultHolidayFn = async ({ holidayId, defaultHolidayName, clientId }) => {
    try {
        return {status: true, message: "Default holiday is set"};
    } catch (error) {
        return {status:false, message: error.message};
    }
}

module.exports = defaultHolidayFn;