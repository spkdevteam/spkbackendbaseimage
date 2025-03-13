const express = require("express");
const createShift = require("../controller/shiftRegister/createShift.controller");
const editShift = require("../controller/shiftRegister/editShift.controller");
const deleteShift = require("../controller/shiftRegister/deleteShift.controller");
const getOneShift = require("../controller/shiftRegister/getOneShift.controller");
const addUser = require("../middleware/user/addUser");

const router = express.Router();


router  
    .post("/createShift", addUser, createShift)
    .patch("/editShift", editShift)
    .delete("/deleteShift/:shiftId/:companyId/:clientId", deleteShift)
    .get("/getOneShift/:shiftId/:companyId/:clientId", getOneShift)


module.exports = router;