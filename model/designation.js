const { default: mongoose } = require("mongoose");

const designationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    shortName: {
        type: String,
        unique: true
    },
    displayId: {
        type: String,
        required: true,
        unique: true
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        default: null,
        index: true
    },
    editedBy: {
        type: String
    },
    deletedAt: {
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Designation = mongoose.model("designation", designationSchema);

module.exports = designationSchema;