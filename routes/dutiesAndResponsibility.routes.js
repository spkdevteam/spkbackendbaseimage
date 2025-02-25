const express = require("express");
const createDutyAndResponsibility = require("../controller/dutiesAndResponsibilities/postDutiesAndResponsibility.controller");
const getOneDutyAndResponsibility = require("../controller/dutiesAndResponsibilities/getOneDutyAndResponsibility.controller");
const deleteDutyAndResponsibility = require("../controller/dutiesAndResponsibilities/deleteDutyAndResponsibility.controller");
const getPaginatedDutyAndResponsibility = require("../controller/dutiesAndResponsibilities/getPaginatedDutyAndResponsibility.controller");
const editOneDutyAndResponsibility = require("../controller/dutiesAndResponsibilities/editOneDutyAndResponsibility.controller");

const router = express.Router();

router
    .post("/createDuty", createDutyAndResponsibility)
    .patch("/editOneDutyAndResponsibility", editOneDutyAndResponsibility)
    .delete("/deleteDutyAndResponsibility/:id/:clientId", deleteDutyAndResponsibility)
    .get("/getOneDutyAndResponsibility/:id/:clientId", getOneDutyAndResponsibility)
    .get("/getDutyAndResponsibilityPaginated/:clientId", getPaginatedDutyAndResponsibility)

module.exports = router;