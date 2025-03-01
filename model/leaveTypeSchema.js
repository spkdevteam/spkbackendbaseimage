const mongoose = require("mongoose")
const {Schema} = mongoose
const ObjectId = Schema.ObjectId

const leaveTypeSchema = new mongoose.Schema({
    leaveName: {type: String, required: true},
    leaveType: {type: String, required: true},
    companyId:{type: mongoose.Types.ObjectId, ref: "company", default: null, index: true},
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true },
    deletedAt: { type: Date, default: null, index: true },
},
    {timestamps: true}
);

module.exports = leaveTypeSchema

