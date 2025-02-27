const deleteHolidayFn = async ({}) => {
    try {
        return {status: true, message: "Holiday deleted"};
    } catch (error) {
        return {status:false, message: error.message};
    }
}

module.exports = deleteHolidayFn;