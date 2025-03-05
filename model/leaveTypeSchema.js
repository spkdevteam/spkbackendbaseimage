const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;


const leaveTypeSchema = mongoose.Schema({
    leaveName: {
        type: String,
        required: true,
    },
    leaveType: {
        type: String,
        enum: ["Paid", "Unpaid"],
        trim: true,
        required: true,
    },
    companyId: {
        type: ObjectId,
        ref: "Company",
        default: null,
        index: true
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

//instance for softDelete :
    //[ doc is being fetched based on leaveTypeId (sent by frontend) which is _id of mongo
    //id of deletor(deletedByUser) is also being stored ]
leaveTypeSchema.methods.softDeleteLeaveType = async function ({leaveTypeId, deletedByUser}) {
    try{
        const leave = await this.constructor.findOne({ _id: leaveTypeId, deletedAt: null }); //ensuring leave is non-deletd
        if (!leave) return { status: false, message: "LeaveType doesn't exist" };
        leave.deletedAt = new Date();
        leave.deletedBy = deletedByUser;
        const softDeletedLeaveType = await leave.save();
        return { status: true, leaveType: softDeletedLeaveType };
    }
    catch(error)
    {
        console.error("Error Soft deleting leaveType is:", error);
        return { status: false, message: error.message };
    }
};

//instance for insert:
leaveTypeSchema.methods.insertLeaveType = async function ({ leaveName, leaveType, companyId, createdBy:userId, oldId }) {
    try {
        const newLeaveType = new this.constructor({
            leaveName, 
            leaveType, 
            companyId, 
            createdBy:userId, 
            oldId  
        });
        const savedLeaveType = await newLeaveType.save();
        return { status: true, leaveType: savedLeaveType };
    }
    catch (error) {
        console.error("Error inserting new Leave Type is:", error);
        return { status: false, message: error.message };
    }

}

//instance for update leaveType : 
    // [ leaveType document is being fetched by leaveTypeId sent by frontend which is actually _id of mongo, 
    // id of editor (editedByUser) is alos being stored]

leaveTypeSchema.methods.updateLeaveType = async function ({ leaveTypeId, leaveName, leaveType, editedByUser }) {
    try {
        const leave = await this.constructor.findOne({ _id: leaveTypeId, deletedAt: null }); //ensuring leaveType is non-deleted
        if (!leave) return { status: false, message: "leave type doesn't exist" };
        leave.leaveName = leaveName;
        leave.leaveType = leaveType;
        leave.editedBy = editedByUser;
        const updatedLeaveType = await leave.save();
        return { status: true, leaveType: updatedLeaveType };
    }
    catch(error)
    {
        console.error("Error updating leaveType is:", error);
        return { status: false, message: error.message };
    }

}

//instance for toggle leaveType :
    //[ leaveType document is being fetched by leaveTypeId sent by frontend which is actually _id of mongo,
    //id of toggler (toggledByUser) is also being stored ]
leaveTypeSchema.methods.toggleLeaveType = async function ({ leaveTypeId, toggledByUser }) {
    try{
        const leave = await this.constructor.findOne({ _id: leaveTypeId, deletedAt: null }); //ensuring leaveType is non-deletd
        if (!leave) return { status: false, message: "LeaveType doesn't exist" };
        leave.isActive = !leave.isActive;
        leave.editedBy = toggledByUser;
        const toggledleaveType = await leave.save();
        return { status: true, leave: toggledleaveType };
    }
    catch(error)
    {
        console.error("Error toggling leaveType is:", error);
        return { status: false, message: error.message };
    }
}



const leaveTypeModel = mongoose.model("leaves", leaveTypeSchema)
module.exports = { leaveTypeModel ,leaveTypeSchema}