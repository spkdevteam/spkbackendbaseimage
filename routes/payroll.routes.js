const express = require("express");
const createPayroll = require("../controller/payrollMaster/createPayroll.controller");
const getPayrollById = require("../controller/payrollMaster/getPayrollById.controller");
const getPaginatedpayroll = require("../controller/payrollMaster/getPaginatedpayroll.controller");
const editPayroll = require("../controller/payrollMaster/editPayroll.controller");
const router = express.Router();

router
    .post("/createPayroll", createPayroll)
    .patch("/editPayroll", editPayroll)
    .get("/getPayrollById/:payrollId/:clientId", getPayrollById)
    .get("/getPaginatedpayroll/:clientId", getPaginatedpayroll)

module.exports = router;