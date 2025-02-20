require('dotenv').config();
const express = require('express');
const swaggerRouter = require('./swagger.routes');
const userRouter = require('./user.routes');
<<<<<<< HEAD
const apiMasterRouter = require("./apiMaster.routes")

=======
const deptRouter = require("./department.routes");
>>>>>>> origin/new_biswarup

const mainRouter = express.Router()

mainRouter
    .use('/api-docs', swaggerRouter)
    .use('/users', userRouter)
<<<<<<< HEAD
    .use("/api-master", apiMasterRouter)
=======
    .use('/dept', deptRouter)

>>>>>>> origin/new_biswarup
module.exports = { mainRouter };
