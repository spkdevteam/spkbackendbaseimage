
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')
 
const mainRouter = express.Router()


mainRouter
    .use('/api-docs', swaggerRouter)

     

module.exports = mainRouter

