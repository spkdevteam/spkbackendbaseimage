const deleteHolidayFn = async ({ holidayId, companyId, clientId }) => {
    try {
        return {status: true, message: "Holiday deleted"};
    } catch (error) {
        return {status:false, message: error.message};
    }
}

module.exports = deleteHolidayFn;