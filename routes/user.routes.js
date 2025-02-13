const express = require('express');
const { signup } = require('../controllers/user/postUserSign.controller');


const userRouter = express.Router();


userRouter.post("/",(req,res,next)=>{ console.log('reached userRouter '); next();} ,signup);

module.exports = userRouter;