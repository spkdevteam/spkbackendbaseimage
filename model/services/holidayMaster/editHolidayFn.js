const editHolidayFn = async ({ holidayId, holiday, holidayName, companyId, clientId }) => {
    try {
        return {status: true, message: "Holiday updated successfully"};
    } catch (error) {
        return {status: false, message: error.message}
    }
}

module.exports = editHolidayFn;