const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const shiftRegisterSchema = new mongoose.Schema({
    shiftName: { type: String, unique: true, required: true },
    shiftDetails: [{ type: String, required: true }],
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    companyId: { type: mongoose.Types.ObjectId, ref: "company", index: true },
    createdBy: { type: ObjectId, ref: "user", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String, default: null },
    isActive: { type: Boolean, default: true }
});

//to save the shift register
shiftRegisterSchema.methods.insertRole = async function ({ userId, shiftName, shiftDetails, startTime, endTime, companyId }) {
    try {
        const shiftRegister = new this({
            createdBy: userId, shiftName, shiftDetails, startTime, endTime, companyId
        });

        const savedShiftRegister = await shiftRegister.save();

        return { status: true, shiftRegister: savedShiftRegister };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to update the shift register
shiftRegisterSchema.methods.updateRole = async function ({ userId, shiftRegisterId, shiftName, shiftDetails, startTime, endTime }) {
    try {
        const shiftRegister = await this.constructor.findOne({ _id: shiftRegisterId, deletedAt: null });

        if (!shiftRegister) return { status: false, message: "Network problem, try again" };


        shiftRegister.editedBy = userId;
        shiftRegister.shiftName = shiftName;
        shiftRegister.shiftDetails = shiftDetails;
        shiftRegister.startTime = startTime;
        shiftRegister.endTime = endTime;



        const savedShiftRegister = await shiftRegister.save();

        return { status: true, shiftRegister: savedShiftRegister };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to soft delete the shift register
shiftRegisterSchema.methods.softDeleteRole = async function ({ userId, shiftRegisterId }) {
    try {
        const shiftRegister = await this.constructor.findOne({ _id: shiftRegisterId, deletedAt: null });
        if (!shiftRegister) return { status: false, message: "Network problem, Try again" };

        shiftRegister.deletedAt = new Date();
        shiftRegister.deletedBy = userId;

        const savedShiftRegister = await shiftRegister.save();
        return { status: true, shiftRegister: savedShiftRegister };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the shift register
shiftRegisterSchema.methods.toggleRole = async function ({ userId, shiftRegisterId }) {
    try {
        const shiftRegister = await this.constructor.findOne({ _id: shiftRegisterId, deletedAt: null });
        if (!shiftRegister) return { status: false, message: "Network problem, Try again" };

        shiftRegister.editedBy = userId;
        shiftRegister.isActive = !shiftRegister.isActive;

        const savedShiftRegister = await shiftRegister.save();
        return { status: true, shiftRegister: savedShiftRegister };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const ShiftRegister = mongoose.model("shiftRegister", shiftRegisterSchema);

module.exports = { shiftRegisterSchema, ShiftRegister };