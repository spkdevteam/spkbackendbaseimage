const express = require("express");
const createLeaveApplication = require("../controller/leaveRegister/createLeaveApplication.controller");
const leaveApplicationDetailsEdit = require("../controller/leaveRegister/leaveApplicationDetailsEdit.controller");
const leaveOfAllLoggedInEmployees = require("../controller/leaveRegister/leaveOfAllLoggedInEmployees.controller");
const leaveApplicationDetailsById = require("../controller/leaveRegister/leaveApplicationDetailsById.controller");
const leaveApplicationStatus = require("../controller/leaveRegister/leaveApplicationStatus.controller");

const router = express.Router();

router
    .post("/createLeave", createLeaveApplication)
    .patch("/editApproval", leaveApplicationDetailsEdit)
    .get("/leaveOfAllLoggedInEmployees/:clientId", leaveOfAllLoggedInEmployees)
    .get("/leaveApplicationDetailsById/:userId/:clientId", leaveApplicationDetailsById)
    .get("/leaveApplicationStatus/:userId/:clientId", leaveApplicationStatus)

module.exports = router;