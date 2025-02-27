const express = require("express");
const createHoliday = require("../controller/holidayMaster/createHoliday.controller");
const editHoliday = require("../controller/holidayMaster/editHoliday.controller");
const deleteHoliday = require("../controller/holidayMaster/deleteHoliday.controller");
const getPaginatedholiday = require("../controller/holidayMaster/getPaginatedholiday.controller");
const toggleHoliday = require("../controller/holidayMaster/toggleHoliday.controller");
const defaultHoliday = require("../controller/holidayMaster/defaultHoliday.controller");

const router = express.Router();

router
    .post("/createHoliday", createHoliday)
    .patch("/editHoliday", editHoliday)
    .patch("/toggleHoliday", toggleHoliday)
    .patch("/defaultHoliday", defaultHoliday)
    .delete("/deleteHoliday/:holidayId/:clientId", deleteHoliday)
    .get("/getPaginatedholiday/:clientId", getPaginatedholiday)


module.exports = router;