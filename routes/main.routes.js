require('dotenv').config();
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')
const userRouter = require("./user.routes")

 
const mainRouter = express.Router()


mainRouter
    .use('/api-docs', swaggerRouter)
    .use("/users", userRouter)
    
module.exports = {mainRouter}
