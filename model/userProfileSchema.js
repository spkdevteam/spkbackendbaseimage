const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const userProfileSchema = new Schema(
    {
        displayId: { type: String, unique: true },
        companyId: { type: ObjectId, ref: "company", default: null, index: true },
        firstName: { type: String, required: true },
        lastName: { type: String },
        profileImage: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,

        },
        phone: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
            default: 'Prefer not to say',
            trim: true,
        },
        bloodGroup: {
            type: String,
            trim: true,
            default: null
        },
        address: [
            {
                city: {
                    type: String,
                    trim: true,
                },
                state: {
                    type: String,
                    trim: true,
                },
                country: {
                    type: String,
                    trim: true,
                },
                ZipCode: {
                    type: String,
                    trim: true,
                },
            }
        ],
        documents: [{
            type: String,
            required: true
        }],
        leaveDetails: [{
            type: String,
            default: null
        }],
        designation: {
            type: ObjectId,
            ref: "designation",
            default: null,
            index: true
        },
        department: {
            type: ObjectId,
            ref: "department",
            default: null,
            index: true,
        },
        family: [{
            type: String,
            default: null
        }],
        maritalStatus: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        otp: {
            type: String,
            trim: true,
            default: null
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        isActive: { type: Boolean, default: true },
        createdBy: { type: ObjectId, ref: "user", index: true },
        deletedAt: { type: Date, default: null, index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        oldId: { type: ObjectId, index: true, default: null }
    },
    { timestamps: true }
);

userProfileSchema.methods.softDelete = async function (userId) {
    return await this.updateOne({ _id: userId, deletedAt: null }, { deletedAt: new Date(), deletedBy: userId });
    // this.deletedAt = new Date();
    // this.deletedBy = userId;
    // return this.save(callback);
};


const userProfileModel = mongoose.model("Userprofile", userProfileSchema);
module.exports = { userProfileModel ,userProfileSchema};

