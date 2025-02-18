require('dotenv').config();
<<<<<<< HEAD
const express = require('express');
const swaggerRouter = require('./swagger.routes');
const userRouter = require('./user.routes');

const mainRouter = express.Router()

mainRouter
    .use('/api-docs', swaggerRouter)
    .use('/users', userRouter);

module.exports = { mainRouter };
=======
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')
const userRouter = require("./user.routes")
const companyRouter = require("./company.routes")

 
const mainRouter = express.Router()


mainRouter
    .use('/api-docs', swaggerRouter)
    
    .use("/users", userRouter)
    .use("/company", companyRouter)
    
module.exports = {mainRouter}
>>>>>>> new_pragya
