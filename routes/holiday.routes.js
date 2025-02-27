const express = require("express");
const createHoliday = require("../controller/holidayMaster/createHoliday.controller");

const router = express.Router();

router.post("/createHoliday", createHoliday)


module.exports = router;