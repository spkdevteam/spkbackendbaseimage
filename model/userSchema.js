const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

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
            required: true
        },
        password:{
            type: String,
            required: true, 
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
            default: 'Prefer not to say',
            trim: true,
        },
        age: {
            type: Number,
            trim: true,
            default: null
        },
        bloodGroup: {
            type: String,
            trim: true,
            default: null
        },
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
        address: {
            type: String,
            trim: true,
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
    },
    { timestamps: true }
);

//using pre save hook to hash the pasword
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

//method to comapre password
userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("User", userSchema);
module.exports = userSchema;

