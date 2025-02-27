const createHolidayFn = async ({ companyId, holiday, holidayName, clientId }) => {
    try {
        return {status: true, message: "New Holiday created", data: {
            holidayid: "67b32682425c6067035df306",
        } }
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = createHolidayFn;