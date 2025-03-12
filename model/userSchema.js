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
        documents: { type: [String], required: true },
        leaveDetails: { type: [String], default: [] },
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
        family: { type: [String], default: [] },
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
        deletedBy: { type: ObjectId, ref: "user", index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        oldId: { type: String, default: null }
    },
    { timestamps: true }
);

// Instance method for soft delete : [One with access soft deleting an non-deletd user and the id of the deletor(deletedById) is being stored also]
userSchema.statics.softDeleteUser = async function ({ userId, deletedByUser }) {
    try {
        const user = await this.findOne({ _id: userId, deletedAt: null }); //ensuring user is non-deletd
        if (!user) return { status: false, message: "User doesn't exist" };
        user.deletedAt = new Date();
        user.deletedBy = deletedByUser;
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
userSchema.statics.insertUser = async function ({ displayId, companyId, firstName, lastName, profileImage, email, phone, password, gender, bloodGroup, address, documents, leaveDetails, designation, department, family, maritalStatus, dateOfBirth, createdById, deletedAt, oldId = null }) {
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
            // otp,
            // isVerified : false,
            // isActive : true,
            createdBy: createdById,
            deletedAt,
            // deletedBy: deletedBy ? new ObjectId(deletedBy) : null,
            // editedBy: editedBy ? new ObjectId(editedBy) : null,
            oldId
        });
        const savedUser = await newUser.save();
        return { status: true, user: savedUser };
    }
    catch (error) {
        console.error("Error inserting user is:", error);
        return { status: false, message: error.message };
    }
}
//instance method for update: [One is updating details of the user and id of the updator (editedByUser) is also being stored at editedBy]
userSchema.statics.updateUser = async function ({ userId, firstName, lastName, profileImage, email, phone, password, gender, bloodGroup, address, documents, leaveDetails, family, maritalStatus, dateOfBirth, editedByUser }) {
    try {
        const user = await this.findOne({ _id: userId, deletedAt: null }); //ensuring user is non-deletd
        if (!user) return { status: false, message: "User doesn't exist" };
        user.firstName = firstName;
        user.lastName = lastName;
        user.profileImage = profileImage;
        user.email = email;
        user.phone = phone;
        user.password = password;
        user.gender = gender;
        user.bloodGroup = bloodGroup;
        user.address = address;
        user.documents = documents;
        user.leaveDetails = leaveDetails;
        user.family = family;
        user.maritalStatus = maritalStatus;
        user.dateOfBirth = dateOfBirth;
        user.editedBy = editedByUser;
        const updatedUser = await user.save();
        return { status: true, user: updatedUser };
    }
    catch (error) {
        console.error("Error updating user is:", error);
        return { status: false, message: error.message };

    }
}

//instance for toggle: [One with access is toggling i.e changing the isActive status of the user and the editors id (toggledByUser) is also being stored]
userSchema.statics.toggleUser = async function ({ userId, toggledByUser }) {
    try {
        const user = await this.findOne({ _id: userId, deletedAt: null }); //ensuring user is non-deletd
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

