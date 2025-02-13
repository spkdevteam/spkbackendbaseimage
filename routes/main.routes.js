
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')
<<<<<<< HEAD

const mainRouter = express.Router()
mainRouter
.use('/api-docs',swaggerRouter)
.use('/',(req,res)=>{
    res.json({message:'Request received From '+ req.hostname + req.originalUrl})
})

module.exports = mainRouter


 
=======
 
const mainRouter = express.Router()


mainRouter
    .use('/api-docs', swaggerRouter)

     

module.exports = mainRouter

>>>>>>> 7118d2d (initial commit)
