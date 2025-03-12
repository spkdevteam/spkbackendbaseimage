require('dotenv').config();
const express = require('express');
const swaggerRouter = require('./swagger.routes');
const userRouter = require('./user.routes');
const deptRouter = require("./department.routes");
const desigRouter = require("./designation.routes");
const rulesAndPermissionRouter = require("./rulesAndPermission.routes");
const dutiesAndResponsibilityRouter = require("./dutiesAndResponsibility.routes");
const rolesRouter = require("./roles.routes");
const leaveApplicationRouter = require("./leaveApplication.routes");
const leaveTypeRouter = require("./leaveType.routes");
const payrollRouter = require("./payroll.routes");
const companyRouter = require("./company.routes");
const userProfileRouter = require("./userProfile.routes");
const holidayRouter = require("./holiday.routes");
const shiftRegisterRouter = require("./shiftRegister.routes");
const rulesRouter = require("./rules.routes");
const apiMasterRouter = require("./apiMaster.routes");
const menuMasterRouter = require("./menuMaster.routes");
const documentMasterRouter = require("./documentMaster.routes");
const documentPropertiesRouter = require("./documentProperties.routes");



const mainRouter = express.Router()

mainRouter
    .use('/api-docs', swaggerRouter)
    .use('/users', userRouter)
    .use('/department', deptRouter)
    .use('/designation', desigRouter)
    .use('/rules',  rulesRouter)
    .use('/menu', menuMasterRouter)
    .use('/api',  apiMasterRouter)
    //.use('/rules', rulesAndPermissionRouter)
    .use('/demoDuties', dutiesAndResponsibilityRouter)
    .use('/demoRoles', rolesRouter)
    .use('/demoLeaves', leaveApplicationRouter)
    .use('/demoPayroll', payrollRouter)
    .use('/demoHoliday', holidayRouter)
    .use('/demoshiftRegister', shiftRegisterRouter)
    .use("/api-master", apiMasterRouter)
    .use("/users", userRouter)
    .use("/company", companyRouter)
    .use("/document",documentPropertiesRouter)
    .use("/document-master", documentMasterRouter)
    .use("/users/profile", userProfileRouter)
    .use("/leaveType", leaveTypeRouter)
    

module.exports = { mainRouter };