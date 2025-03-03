const { getClientDatabaseConnection } = require("../../connection");
const holidayMasterSchema = require("../../holiday_master");
const { emptyStringValidation, isValidDate } = require("../validation/validation");

const createHolidayFn = async ({ holidayName, holidayDate, departmentId, description, isActive, companyId, clientId }) => {
    try {
        const validation = [
            emptyStringValidation({ string: holidayName, name: "Holiday name: " }),
            emptyStringValidation({ string: description, name: "Description: " }),
            isValidDate({ holidayDate }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map((e) => e.message).join(", ") };

        switch (true) {
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company ID" };
            case !mongoose.Types.ObjectId.isValid(departmentId):
                return { status: false, message: "Invalid department ID" };
        };

        const db = await getClientDatabaseConnection({ clientId });
        const HolidayMaster = await db.model("holidaymaster", holidayMasterSchema);


        const alreadyExists = await HolidayMaster.findOne({ holidayDate, deletedAt: null });

        if (alreadyExists) return { status: false, message: "This holiday already exists." };

        const holidayMaster = new HolidayMaster({
            holidayName,
            holidayDate,
            companyId,
            departmentId,
            description,
            isActive
        });

        await holidayMaster.save();

        return { status: true, message: "New Holiday created", data: holidayMaster };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createHolidayFn;