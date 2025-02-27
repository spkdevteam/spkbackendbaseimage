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



const mainRouter = express.Router()

mainRouter
    .use('/api-docs', swaggerRouter)
    .use('/users', userRouter)
    .use('/dept', deptRouter)
    .use('/designation', desigRouter)
    .use('/rules', rulesAndPermissionRouter)
    .use('/demoDuties', dutiesAndResponsibilityRouter)
    .use('/demoRoles', rolesRouter)
    .use('/demoLeaves', leaveApplicationRouter)
    

module.exports = { mainRouter };