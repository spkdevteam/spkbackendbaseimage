
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')

const mainRouter = express.Router()
mainRouter
.use('/TRANSACTION',(req,res,next)=>{console.log('request received on transaction route '),next()},transRoutes)
.use('/api-docs',swaggerRouter)

module.exports = mainRouter


 