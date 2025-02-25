require('dotenv').config();
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')
const userRouter = require("./user.routes")
const companyRouter = require("./company.routes")
const apiMasterRouter = require("./apiMaster.routes")
const documentPropertiesRouter = require("./documentProperties.routes")

 
const mainRouter = express.Router()


mainRouter
    .use('/api-docs', swaggerRouter)
    .use("/api-master", apiMasterRouter)
    .use("/users", userRouter)
    .use("/company", companyRouter)
    .use("/document",documentPropertiesRouter)
    
module.exports = {mainRouter}
