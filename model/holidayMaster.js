const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const holidayMasterSchema = new mongoose.Schema ({
    holidayName: { type: String, unique: true, required: true },
    holidayDate: { type: Date, unique: true, required: true },
    companyId: {type: ObjectId, ref: "company", index: true, required: true},
    departments: {type: Array},
    description: {type: String},
    createdBy: { type: ObjectId, ref: "user", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String, default: null },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });


//to save in the holiday master
holidayMasterSchema.methods.insertHolidayMaster = async function ({ userId, holidayName, holidayDate, companyId, departments, description }) {
    try {
        const holidayMaster = new this({
            holidayName, holidayDate, companyId, departments, description, createdBy: userId
        });

        // //checking availability of holiday name
        // const holidayNameAlreadyExists = await thisconstructor.findOne({ holidayName });
        // if(holidayNameAlreadyExists) return { status: false, message: "This holiday name is not available."};

        // //checking availability of holiday date
        // const holidayDateAlreadyExists = await thisconstructor.findOne({ holidayDate });
        // if(holidayDateAlreadyExists) return { status: false, message: "This holiday date is not available."};


        const savedHolidayMaster = await holidayMaster.save();
        return { status: true, holidayMaster: savedHolidayMaster };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

// to update the holiday master
holidayMasterSchema.methods.updateHolidayMaster = async function ({ userId, holidayMasterId, holidayName, holidayDate, departments, description }) {
    try {
        const holidayMaster = await this.constuctor.findOne({ _id: holidayMasterId, deletedAt: null });
        if (!holidayMaster) return { status: false, message: "Network problem, Try again" };

        holidayMaster.holidayName = holidayName;
        holidayMaster.holidayDate = holidayDate;
        holidayMaster.departments = departments;
        holidayMaster.description = description;
        holidayMaster.editedBy = userId;

        const savedHolidayMaster = await holidayMaster.save();
        return { status: true, holidayMaster: savedHolidayMaster };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to soft delete in the holiday master
holidayMasterSchema.methods.softDeleteDesignation = async function ({ userId, holidayMasterId }) {
    try {
        const holidayMaster = await this.constructor.findOne({ _id: holidayMasterId, deletedAt: null });
        if (!holidayMaster) return { status: false, message: "Network problem, Try again" };

        holidayMaster.deletedAt = new Date();
        holidayMaster.deletedBy = userId;

        const savedHolidayMaster = await holidayMaster.save();
        return { status: true, holidayMaster: savedHolidayMaster };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness in the holiday master
holidayMasterSchema.methods.toggleDesignation = async function ({ userId, holidayMasterId }) {
    try {
        const holidayMaster = await this.constructor.findOne({ _id: holidayMasterId, deletedAt: null });
        if (!holidayMaster) return { status: false, message: "Network problem, Try again" };

        holidayMaster.editedBy = userId;
        holidayMaster.isActive = !holidayMaster.isActive;

        const savedHolidayMaster = await holidayMaster.save();
        return { status: true, holidayMaster: savedHolidayMaster };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const holidayMaster = mongoose.model("holidayMaster", holidayMasterSchema);

module.exports = { holidayMasterSchema, holidayMaster };