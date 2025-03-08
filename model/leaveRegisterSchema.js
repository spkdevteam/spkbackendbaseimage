const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const leaveRegisterSchema = mongoose.Schema({
    leaveDate: {
        type: Date,
        required: true,
    },
    companyId: {
        type: ObjectId,
        ref: "Company",
        index: true,
        default: null
    },
    ApplicationId: {
        type: ObjectId,
        ref: "leaveType",
        index: true,
        default: null
    },
    leaveReason: {
        type: String,
        required: true
    },
    LeaveCategory: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    ShiftId: {
        type: ObjectId,
        ref: "shiftRegister",
        index: true,
        default: null
    },
    subShiftId: {
        type: ObjectId,
        ref: "",
        index: true,
        default: null
    },
    status: {
        type: String,
        enum: ["approved", "rejected", "cancelled", "pending"],
        required: true,
    },
    adminComments: {
        type: String,
        default: "",
        trim: true
    },
    approvedBy: {
        type: ObjectId, ref: "admin", index: true
    },
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true },
    deletedAt: { type: Date, default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", index: true },
    oldId: { type: ObjectId, index: true, default: null },
    deletedBy: { type: ObjectId, ref: "user", index: true },


},
    {
        timestamps: true
    }
);


//instance for soft delete: 
    //[ LeaveRegister document is being fetch using by leaveRegisterId sent by frontend which is _id of mongo  
    //id of deletor (deletedByUser) is also being stored]

leaveRegisterSchema.methods.softDeleteLeaveRegister = async function ({ leaveRegisterId, deletedByUser }) {
    try {
        const leave = await this.constructor.findOne({ _id: leaveRegisterId, deletedAt: null }); //ensuring leave is non-deletd
        if (!leave) return { status: false, message: "Leave doesn't exist" };
        leave.deletedAt = new Date();
        leave.deletedBy = deletedByUser;
        const softDeletedLeave = await leave.save();
        return { status: true, leave: softDeletedLeave };
        }
    catch (error) {
        console.error("Error Soft deleting leave is:", error);
        return { status: false, message: error.message };
    }

};

//instance method for insert : [New LeaveRegister is being created]
leaveRegisterSchema.methods.insertLeaveRegister = async function ({ leaveDate, companyId, ApplicationId, leaveReason, LeaveCategory,
    startDate, endDate, ShiftId, subShiftId, status, adminComments, approvedBy, createdBy:userId, oldId }) {
    try {
        const newLeave = new this.constructor({
            leaveDate,
            companyId, 
            ApplicationId, 
            leaveReason, 
            LeaveCategory,
            startDate, 
            endDate, 
            ShiftId, 
            subShiftId, 
            status, 
            adminComments, 
            approvedBy, 
            createdBy : userId, 
            oldId
        });
        const savedLeave = await newLeave.save();
        return { status: true, leave: savedLeave };
    }
    catch (error) {
        console.error("Error inserting new Leave is:", error);
        return { status: false, message: error.message };
    }
}

//instance method for update: 
    // [One is updating leave details, 
    // (leaveRegisterId) is the mongo _id of particluar leave document sent by frontend
    //editedByUser is the id of the person editing the leave ]
leaveRegisterSchema.methods.updateLeaveRegister = async function ({ leaveRegisterId, leaveDate, companyId, ApplicationId, leaveReason, LeaveCategory,
    startDate, endDate, ShiftId, subShiftId, status, adminComments, editedByUser}) {
    try {//ASK what will happen to approvedBy, createdBy during update
        const leave = await this.constructor.findOne({ _id: leaveRegisterId, deletedAt: null }); //ensuring leave is non-deletd
        if (!leave) return { status: false, message: "leave doesn't exist" };        
        leave.leaveDate = leaveDate;
        leave.companyId = companyId;
        leave.ApplicationId = ApplicationId;
        leave.leaveReason = leaveReason;
        leave.LeaveCategory = LeaveCategory;
        leave.startDate = startDate;
        leave.endDate = endDate;
        leave.ShiftId = ShiftId;
        leave.subShiftId = subShiftId;
        leave.status = status;
        leave.adminComments = adminComments;
        leave.editedBy = editedByUser;
        const updatedLeave = await leave.save();
        return { status: true, leave: updatedLeave };
    }
    catch (error) {
        console.error("Error updating leave is:", error);
        return { status: false, message: error.message };

    }
}

//instance for toggle: 
    // [One with access is toggling i.e changing the isActive status of the leave
    // (leaveRegisterId) is the mongo _id of particluar leave document sent by frontend
    //toggledByUser is the id of the person toggling the leave ]
leaveRegisterSchema.methods.toggleLeaveRegister = async function ({ leaveRegisterId, toggledByUser }) {
    try {
        const leave = await this.constructor.findOne({ _id: leaveRegisterId, deletedAt: null }); //ensuring leave is non-deletd
        if (!leave) return { status: false, message: "Leave doesn't exist" };
        leave.isActive = !leave.isActive;
        leave.editedBy = toggledByUser;
        const toggledleave = await leave.save();
        return { status: true, leave: toggledleave };
    }
    catch (error) {
        console.error("Error toggling leave is:", error);
        return { status: false, message: error.message };
    }
}









const leaveRegisterModel = mongoose.model("leaveRegister", leaveRegisterSchema)
module.exports = { leaveRegisterModel,leaveRegisterSchema }