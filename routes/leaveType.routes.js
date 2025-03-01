const express = require("express")
const createLeaveType = require("../controller/leaveType/createLeaveType.controller")
const editLeaveType = require("../controller/leaveType/editLeaveType.controller")
const deletedLeaveType = require("../controller/leaveType/deleteLeaveType.controller")
const {getAllLeaveType, getByIdLeaveType} = require("../controller/leaveType/getLeaveType.controller")


const router = express.Router()

router.post("/create", createLeaveType)
router.put("/edit", editLeaveType)
router.delete("/delete/:clientId/:companyId/:leaveId", deletedLeaveType)
router.get("/getAll/:clientId/:companyId", getAllLeaveType)
router.get("/getById/:clientId/:companyId/:leaveId",getByIdLeaveType )

module.exports = router