const { default: mongoose } = require("mongoose");

const holidayMasterSchema = mongoose.Schema({
    holidayName: {type: String, required: true},
    holidayDate: {type: Date, required: true, unique: true},
    companyId: {type: mongoose.Schema.ObjectId, ref: "company", index: true},
    departmentId: {type: mongoose.Schema.ObjectId, ref: "department"},
    description: {type: String, required: true},
    isActive: {type: Boolean, default: false},
    deletedAt:{type: Date, default: null},
    deletedBy: {type: mongoose.Schema.ObjectId, ref: "user"},
    createdBy:{type: mongoose.Schema.ObjectId, ref: "user"}
}, { timestamps: true });

const holidayMaster = mongoose.model("holiday", holidayMasterSchema);

module.exports = holidayMasterSchema;