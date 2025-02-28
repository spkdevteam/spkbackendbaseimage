const toggleHolidayFn = async ({ holidayId, companyId, clientid }) => {
    try {
        return {status: true, message: "holiday changed"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = toggleHolidayFn;