
const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const companySchema = new Schema(
    {

        displayId : {type:String,unique:true},
        parentCompany: { type: ObjectId, ref: "company", default:null, index: true }, 
        name: { type: String, required: true },
        incorporationName: { type: String,},
        cinNumber:  { type: String },
        gstNumber:  { type: String },
        prefix:  { type: String },
        Logo  : {type: String, default : null},
        email: {
            type: String,
            lowercase: true,
            index: true,
            trim: true,
            sparse: true,
            validate: {
                validator: function (v) {
                    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
                },
                message: 'Invalid email format.',
            },
        },

        contactNumber: {
            type: String,
            trim: true,
            validate: {
                validator: function (v) {
                    return /^\+?[1-9]\d{1,14}$/.test(v);
                },
                message: 'Invalid phone number format.',
            },
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

        isActive: { type: Boolean, default: false },

        createdBy: { type: ObjectId, ref: "users", default:null, index: true }, // Index for admin/user relationships
        deletedBy:{ type: ObjectId, ref: "users", default:null, index: true }, // Index for admin/user relationships
        deletedAt: { type: Date, default: null, index: true }, // Index for soft-delete functionality
    },
    
    { timestamps: true }
);

module.exports = companySchema;
