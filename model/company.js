const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const companySchema = new Schema(
    {
        displayId: { type: String, unique: true },
        companyId: { type: ObjectId, ref: "company", default: null, index: true },
        firstName: { type: String, required: true },
        lastName: { type: String },
        name: { type: String, required: true },
        profileImage: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true
        },
        phone: {
            type: String,
            trim: true,
            required: true
            required: true,
            unique: true
        },
        password: { type: String, required: true },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other", "Prefer not to say"],
            default: "Prefer not to say",
            trim: true
        },
        address: [
            {
                city: { type: String, trim: true },
                state: { type: String, trim: true },
                country: { type: String, trim: true },
                ZipCode: { type: String, trim: true }
            }
        ],
        documents: { type: [String], default: [] },
        leaveDetails: { type: [String], default: [] },
        designation: { type: ObjectId, ref: "designation", default: null, index: true },
        department: { type: ObjectId, ref: "department", default: null, index: true },
        family: { type: [String], default: [] },
        maritalStatus: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        otp: { type: String, trim: true, default: null },
        isVerified: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        createdBy: { type: ObjectId, ref: "user", index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
        deletedAt: { type: Date, default: null, index: true },
        oldId: { type: String, default: null }
    },
    { timestamps: true }
);

// Soft Delete Method
companySchema.methods.softDelete = async function ({ userId }) {
    if (this.deletedAt) {
        return { status: false, message: "Company already deleted" };
    }
    this.deletedAt = new Date();
    this.deletedBy = userId;
    await this.save();
    return { status: true, message: "Company deleted successfully", data: this };
};

// Edit Method
companySchema.methods.edit = async function ({ userId, updatedData }) {
    try {
        Object.assign(this, updatedData);
        this.editedBy = userId;
        await this.save();
        return { status: true, message: "Company updated successfully", data: this };
    } catch (error) {
        return { status: false, message: "Failed to update company", error: error.message };
    }
};

// Insert Method
companySchema.statics.insert = async function ({ newCompany, userId }) {
    try {
        const existingCompany = await this.findOne({ email: newCompany.email });
        if (existingCompany) {
            return { status: false, message: "Company with this email already exists" };
        }
        const company = new this({ ...newCompany, createdBy: userId });
        const result = await company.save();
        return { status: true, message: "Company created successfully", data: result };
    } catch (error) {
        return { status: false, message: "Failed to create company", error: error.message };
    }
};

// Toggle Active Status
companySchema.methods.toggle = async function ({ userId }) {
    this.isActive = !this.isActive;
    this.editedBy = userId;
    await this.save();
    return { status: true, message: "Company status updated", data: this };
};

const companyModel = mongoose.model("Company", companySchema);
module.exports = { companyModel, companySchema };
