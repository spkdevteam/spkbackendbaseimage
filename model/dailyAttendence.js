const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const dailyAttendanceSchema = new mongoose.Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    companyId: { type: ObjectId, ref: "company", index: true },
    role: { type: String, required: true },
    departmentName: { type: String },
    roleName: { type: String },
    attendance: { type: Number },
    createdBy: { type: ObjectId, ref: "user", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String, default: null },
    isActive: { type: Boolean, default: true }
});

//to save the daily attendance
dailyAttendanceSchema.methods.insertRole = async function ({ userId, startTime, endTime, companyId, role, departmentName, roleName, attendance }) {
    try {
        const dailyAttendance = new this({
            createdBy: userId, startTime, endTime, companyId, role, departmentName, roleName, attendance
        });

        const savedDailyAttendance = await dailyAttendance.save();

        return { status: true, dailyAttendance: savedDailyAttendance };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to update the daily attendance
dailyAttendanceSchema.methods.updateRole = async function ({ userId, dailyAttendanceId, startTime, endTime, role, departmentName, roleName, attendance }) {
    try {
        const dailyAttendance = await this.constructor.findOne({ _id: dailyAttendanceId, deletedAt: null });

        if (!dailyAttendance) return { status: false, message: "Network problem, try again" };


        dailyAttendance.editedBy = userId;
        dailyAttendance.startTime = startTime;
        dailyAttendance.endTime = endTime;
        dailyAttendance.role = role;
        dailyAttendance.departmentName = departmentName;
        dailyAttendance.roleName = roleName;
        dailyAttendance.attendance = attendance;


        const savedDailyAttendance = await dailyAttendance.save();

        return { status: true, dailyAttendance: savedDailyAttendance };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to soft delete the daily attendance
dailyAttendanceSchema.methods.softDeleteRole = async function ({ userId, dailyAttendanceId }) {
    try {
        const dailyAttendance = await this.constructor.findOne({ _id: dailyAttendanceId, deletedAt: null });
        if (!dailyAttendance) return { status: false, message: "Network problem, Try again" };

        dailyAttendance.deletedAt = new Date();
        dailyAttendance.deletedBy = userId;

        const savedDailyAttendance = await dailyAttendance.save();
        return { status: true, dailyAttendance: savedDailyAttendance };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the daily attendance
dailyAttendanceSchema.methods.toggleRole = async function ({ userId, dailyAttendanceId }) {
    try {
        const dailyAttendance = await this.constructor.findOne({ _id: dailyAttendanceId, deletedAt: null });
        if (!dailyAttendance) return { status: false, message: "Network problem, Try again" };

        dailyAttendance.editedBy = userId;
        dailyAttendance.isActive = !dailyAttendance.isActive;

        const savedDailyAttendance = await dailyAttendance.save();
        return { status: true, dailyAttendance: savedDailyAttendance };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const DailyAttendance = mongoose.model("dailyAttendance", dailyAttendanceSchema);

module.exports = { DailyAttendance, dailyAttendanceSchema };