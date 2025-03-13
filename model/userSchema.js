const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const userSchema = new Schema(
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
        },
        phone: {
            type: String,
            trim: true,
            required: true,
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
        documents: { type: [{}] },
        leaveDetails: { type: [] },
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
        family: { type: [String] },
        maritalStatus: {
            type: String,

        },
        dateOfBirth: {
            type: Date,

        },
        loginOptions: {
            email: {
                type: String,
                default: null,
            },
            phone: {
                type: String,
                default: null,
            },
            userId: {
                type: String,
                default: null,
            }
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
        deletedBy: { type: ObjectId, ref: "user", index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        oldId: { type: String, default: null }
    },
    { timestamps: true }
);

// Instance method for soft delete : [One with access soft deleting an non-deletd user and the id of the deletor(deletedById) is being stored also]
userSchema.statics.softDeleteUser = async function ({ userId, deletedById, clientId }) {
    try {
        console.log("---------------------------------------", userId, deletedById);
        const user = await this.findOne({ _id: userId, deletedAt: null }); //ensuring user is non-deletd
        console.log("Usssssssssssssssssssssssseeeeeeeeeeeeerrrrrrrrrrrrrr", user);
        if (!user) return { status: false, message: "User doesn't exist" };
        user.deletedAt = new Date();
        user.deletedBy = deletedById;

        const softDeletedUser = await user.save();
        return { status: true, user: softDeletedUser };

        // const softDeletedUser = await this.updateOne({ _id: userId, deletedAt: null }, { deletedAt: new Date(), deletedBy: new ObjectId(userId) });
        // this.deletedAt = new Date();
        // this.deletedBy = userId;
        // return this.save(callback);
    }
    catch (error) {
        console.error("Error Soft deleting user is:", error);
        return { status: false, message: error.message };
    }

};

//instance method for insert : [New user is being created and id of the creator (createdById) is being stored also]
userSchema.statics.insertUser = async function ({ _id = null, userId, displayId, companyId, firstName, lastName, profileImage, email, phone, password, gender, bloodGroup, address, documents, leaveDetails, loginOptions, designation, department, family, maritalStatus, dateOfBirth, createdById, deletedAt }) {
    try {
        const newUser = new this({
            displayId,
            companyId: companyId,
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            password,
            gender,
            bloodGroup,
            address,
            documents,
            leaveDetails,
            designation: designation,
            department: department,
            family,
            maritalStatus,
            dateOfBirth,
            loginOptions,
            // otp,
            // isVerified : false,
            // isActive : true,
            createdBy: userId,
            // deletedBy: deletedBy ? new ObjectId(deletedBy) : null,
            // editedBy: editedBy ? new ObjectId(editedBy) : null,
        });
        if (_id) {
            newUser.oldId = _id
        }
        const savedUser = await newUser.save();
        return { status: true, user: savedUser };
    }
    catch (error) {
        console.error("Error inserting user is:", error);
        return { status: false, message: error.message };
    }
}
//instance method for update: [One is updating details of the user and id of the updator (editedByUser) is also being stored at editedBy]
userSchema.statics.updateUser = async function ({ userId, firstName, lastName, profileImage, email, phone, password, gender, bloodGroup, address, documents, designation, department, leaveDetails, family, loginOptions, maritalStatus, isVerified, isActive, dateOfBirth, editedBy }) {
    try {
        const updateUser = {
            firstName,
            lastName,
            profileImage,
            email,
            phone,
            password,
            gender,
            bloodGroup,
            address,
            documents,
            leaveDetails,
            family,
            designation,
            department,
            maritalStatus,
            dateOfBirth,
            isVerified,
            isActive,
            loginOptions,
            editedBy
        }
        const updatedUser = await this.findOneAndUpdate({ _id: userId, deletedAt: null }, { $set: updateUser }, { new: true }); //ensuring user is non-deletd
        console.log("updatedUserupdatedUserupdatedUser==>>>", updatedUser);

        if (!updatedUser) return { status: false, message: "User doesn't exist" };
        return { status: true, user: updatedUser };
    }
    catch (error) {
        console.error("Error updating user is:", error);
        return { status: false, message: "Failed to update user" };

    }
}

//instance for toggle: [One with access is toggling i.e changing the isActive status of the user and the editors id (toggledByUser) is also being stored]
userSchema.statics.toggleUser = async function ({ userId, toggledByUser, companyId, clientId }) {
    try {
        console.log("hittttttttttttttt");
        const user = await this.findOne({ _id: userId, deletedAt: null, companyId }); //ensuring user is non-deletd
        if (!user) return { status: false, message: "User doesn't exist" };
        user.isActive = !user.isActive;
        user.editedBy = toggledByUser;
        const toggledUser = await user.save();
        return { status: true, user: toggledUser };
    }
    catch (error) {
        console.error("Error toggling user is:", error);
        return { status: false, message: error.message };
    }
}




const userModel = mongoose.model("User", userSchema);
module.exports = { userModel, userSchema };

