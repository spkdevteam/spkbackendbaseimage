const { default: mongoose } = require("mongoose");

const departmentSchema = mongoose.Schema({
    deptName : {type:String},
    displayId : {type:String,unique:true},
    companyId : { type: mongoose.Schema.ObjectId, ref: "company", index: true }, 
    description:{type:String} ,
    deletedAt:{type:Date,default:null},
    isActive:{type:Boolean,default:true},
    old_Id: {type: String     },
    createdBy: { type: mongoose.Schema.ObjectId, ref: "users", default:null, index: true } 
},
{
    timestamps:true
})

const Department = mongoose.model('department',departmentSchema)

module.exports  = departmentSchema