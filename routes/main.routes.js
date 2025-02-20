require('dotenv').config();
const express = require('express');
const swaggerRouter = require('./swagger.routes');
const userRouter = require('./user.routes');
const deptRouter = require("./department.routes");

const mainRouter = express.Router()

mainRouter
    .use('/api-docs', swaggerRouter)
    .use('/users', userRouter)
    .use('/dept', deptRouter)

module.exports = { mainRouter };
