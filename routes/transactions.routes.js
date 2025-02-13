const express = require('express')

const transRoutes = express.Router()

transRoutes
    .all('/',(req,res)=>{
        res.json({message:'api request received',})
    })
     

module.exports = transRoutes
