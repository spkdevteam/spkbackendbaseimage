const defaultHolidayFn = async ({ holidayId, defaultHolidayName, companyId, clientId }) => {
    try {
        return {status: true, message: `Default holiday is set to ${defaultHolidayName}`};
    } catch (error) {
        return {status:false, message: error.message};
    }
}

module.exports = defaultHolidayFn;