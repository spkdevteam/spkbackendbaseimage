const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const companySchema = new Schema(
    {
        displayId: { type: String, unique: true },
        companyId: { type: ObjectId, ref: "company", default: null, index: true },
        name: { type: String, required: true },
        profileImage: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
        email: {
            type: String,
            lowercase: true,
            trim: true,

        },
        phone: {
            type: String,
            trim: true,
            required: true
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
        documents: {
            type: [String],
            required: true,
            default: []
        },
        leaveDetails: {
            type: [String],
            default: []
        },
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
        dateOfBirth: {
            type: Date,
            required: true,
        },
        otp: {
            type: String,
            trim: true,
            default: null,
            required: true,
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
        documents: {
            type: [String],
            required: true,
            default: []
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        isActive: { type: Boolean, default: true },
        createdBy: { type: ObjectId, ref: "user", index: true },
        deletedAt: { type: Date, default: null, index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        oldId: { type: String, default: null }
    },

    { timestamps: true }
);

// //instance for soft delete
// companySchema.methods.softDelete = async function ({userId}) {
//     try {
//         if (this.deletedAt !== null) {
//             return { status: false, message: "Company already deleted" };
//         }
//         this.deletedAt = new Date();
//         this.deletedBy = userId;
//         await this.save();

//         return { status: true, message: "Company deleted successfully", data: this };
//     } catch (error) {
//         return { status: false, message: "Failed to delete company", error: error.message };
//     }
// };

// //instance for edit
// companySchema.methods.edit = async function ({userId, updatedData}) {
//     try {
//         const updatedCompany = await this.constructor.findOneAndUpdate(
//             { _id: this._id },  
//             { ...updatedData, editedBy: userId },
//             { new: true} 
//         );

//         if (!updatedCompany) {
//             return { status: false, message: "Company not found" };
//         }

//         return { status: true, message: "Company edited successfully", data: updatedCompany };
//     } catch (error) {
//         return { status: false, message: "Failed to edit company", error: error.message };
//     }
// };

// //instance for insert
// companySchema.methods.insert = async function ({ newCompany, userId }) {
//     try {
//         // Check for duplicate 
//         const existingCompany = await this.constructor.findOne({ email: newCompany.email });

//         if (existingCompany) {
//             return { status: false, message: "Compnay with email already exists" }
//         }

//         // Create new company instance
//         const newCompanyData = new this.constructor({
//             firstName: newCompany.firstName,
//             lastName: newCompany.lastName,
//             profileImage: newCompany.profileImage,
//             email: newCompany.email,
//             phone: newCompany. phone,
//             gender: newCompany.gender,
//             bloodGroup: newCompany.bloodGroup,
//             address: newCompany.address,
//             documents: newCompany. documents,
//             leaveDetails: newCompany. leaveDetails,
//             designation: newCompany.designation,
//             department: newCompany.department,
//             family: newCompany.family,
//             maritalStatus: newCompany.maritalStatus,
//             dateOfBirth: newCompany.dateOfBirth,
//             createdBy: userId,
//             oldId
//         });

//         const result = await newCompanyData.save();
//         return { status: true, message: "Company created successfully", data: result }
//     } catch (error) {
//         return { status: false, message: "Failed to create company", error: error.message }
//     }
// };

// //instance for toggle
// companySchema.methods.toggle = async function ({userId}) {
//     try {
//         this.isActive = !this.isActive
//         this.editedBy = userId

//         await this.save();
//         return { status: true, message: "Company status toggled", data: this }
//     } catch (error) {
//         return { status: false, message: "Failed to toggle company status", error: error.message }
//     }
// };



// const companyModel = mongoose.model("Company", companySchema);
// module.exports = { companyModel,companySchema };
//instance for soft delete
companySchema.methods.softDelete = async function ({userId}) {
    try {
        if (this.deletedAt !== null) {
            return { status: false, message: "Company already deleted" };
        }
        this.deletedAt = new Date();
        this.deletedBy = userId;
        const result = await this.save();

        return { status: true, message: "Company deleted successfully", data: result };
    } catch (error) {
        return { status: false, message: "Failed to delete company", error: error.message };
    }
};

//instance for edit
companySchema.methods.edit = async function ({userId, updatedData, companyId}) {
    try {
        const updatedCompany = await this.constructor.findOneAndUpdate(
            { _id: companyId, deletedAt: null },  
            { ...updatedData, editedBy: userId },
            { new: true} 
        );

        if (!updatedCompany) {
            return { status: false, message: "Company not found" };
        }

        return { status: true, message: "Company edited successfully", data: updatedCompany };
    } catch (error) {
        return { status: false, message: "Failed to edit company", error: error.message };
    }
};

//instance for insert
companySchema.methods.insert = async function ({ newCompany, userId }) {
    try {
        // // Check for duplicate 
        // const existingCompany = await this.constructor.findOne({ email: newCompany.email });

        // if (existingCompany) {
        //     return { status: false, message: "Compnay with email already exists" }
        // }
        // Create new company instance
        const newCompanyData = new this.constructor({
            name: newCompany.name,
            profileImage: newCompany.profileImage,
            email: newCompany.email,
            phone: newCompany. phone,
            address: newCompany.address,
            documents: newCompany. documents,
            leaveDetails: newCompany. leaveDetails,
            designation: newCompany.designation,
            department: newCompany.department,
            createdBy: userId,
            deletedAt,
            isActive,
            oldId
        });

        const result = await newCompanyData.save();
        return { status: true, message: "Company created successfully", data: result }
    } catch (error) {
        return { status: false, message: "Failed to create company", error: error.message }
    }
};

//instance for toggle
companySchema.methods.toggle = async function ({userId}) {
    try {
        this.isActive = !this.isActive
        this.editedBy = userId

        await this.save();
        return { status: true, message: "Company status toggled", data: this }
    } catch (error) {
        return { status: false, message: "Failed to toggle company status", error: error.message }
    }
};



const companyModel = mongoose.model("company", companySchema);
module.exports = { companyModel,companySchema };
