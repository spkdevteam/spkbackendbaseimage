const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const defaultHolidaySchema = new mongoose.Schema({
    defaultHolidayName: { type: String, unique: true },
    repeatingType: { type: String, enum: ["weekly", "monthly", "yearly", "quinquennial"] },
    holidayStartDateTime: { type: Date, required: true, unique: true },
    holidayStartDateTime: { type: Date, required: true, unique: true },
    holidayEndDateTime: { type: Date, required: true, unique: true },
    companyId: { type: ObjectId, red: "company", require: true, index: true },
    compulsory: { type: Boolean },
    description: { type: String },
    createdBy: { type: ObjectId, ref: "user", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String, default: null },
    isActive: { type: Boolean, default: true }
});


//to save the default holiday
defaultHolidaySchema.methods.insertRole = async function ({ userId, companyId, defaultHolidayName, holidayStartDateTime, holidayEndDateTime, compulsory, description }) {
    try {
        const defaultHoliday = new this({
            createdBy: userId, companyId, defaultHolidayName, holidayStartDateTime, holidayEndDateTime, compulsory, description
        });

        const savedDefaultHoliday = await defaultHoliday.save();

        return { status: true, defaultHoliday: savedDefaultHoliday };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to update the default holiday
defaultHolidaySchema.methods.updateRole = async function ({ userId, defaultHolidayId, defaultHolidayName, holidayStartDateTime, holidayEndDateTime, compulsory, description }) {
    try {
        const defaultHoliday = await this.constructor.findOne({ _id: defaultHolidayId, deletedAt: null });

        if (!defaultHoliday) return { status: false, message: "Network problem, try again" };


        defaultHoliday.editedBy = userId;
        defaultHoliday.defaultHolidayName = defaultHolidayName;
        defaultHoliday.holidayStartDateTime = holidayStartDateTime;
        defaultHoliday.holidayEndDateTime = holidayEndDateTime;
        defaultHoliday.compulsory = compulsory;
        defaultHoliday.description = description;


        const savedDefaultHoliday = await defaultHoliday.save();

        return { status: true, defaultHoliday: savedDefaultHoliday };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to soft delete the default holiday
defaultHolidaySchema.methods.softDeleteRole = async function ({ userId, defaultHolidayId }) {
    try {
        const defaultHoliday = await this.constructor.findOne({ _id: defaultHolidayId, deletedAt: null });
        if (!defaultHoliday) return { status: false, message: "Network problem, Try again" };

        defaultHoliday.deletedAt = new Date();
        defaultHoliday.deletedBy = userId;

        const savedDefaultHoliday = await defaultHoliday.save();
        return { status: true, defaultHoliday: savedDefaultHoliday };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the default holiday
defaultHolidaySchema.methods.toggleRole = async function ({ userId, defaultHolidayId }) {
    try {
        const defaultHoliday = await this.constructor.findOne({ _id: defaultHolidayId, deletedAt: null });
        if (!defaultHoliday) return { status: false, message: "Network problem, Try again" };

        defaultHoliday.editedBy = userId;
        defaultHoliday.isActive = !defaultHoliday.isActive;

        const savedDefaultHoliday = await defaultHoliday.save();
        return { status: true, defaultHoliday: savedDefaultHoliday };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const DefaultSchema = mongoose.model("DefaultHolidaySchema", defaultHolidaySchema);

module.exports = { DefaultSchema, defaultHolidaySchema };