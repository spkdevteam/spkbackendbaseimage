require('dotenv').config();
const express = require('express');
const swaggerRouter = require('./swagger.routes');
const userRouter = require('./user.routes');
const apiMasterRouter = require("./apiMaster.routes")


const mainRouter = express.Router()

mainRouter
    .use('/api-docs', swaggerRouter)
    .use('/users', userRouter);
.use("/api-master", apiMasterRouter)
module.exports = { mainRouter };
