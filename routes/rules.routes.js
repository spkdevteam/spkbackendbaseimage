const express = require("express");
const createRule = require("../controller/rules/createRule.controller");
const editRule = require("../controller/rules/editRule.controller");
const deleteRule = require("../controller/rules/deleteRule.controller");

const router = express.Router();

router
    .post("/createRule", createRule)
    .put("/editRule", editRule)
    .delete("/deletRule/:userId/:ruleId/:clientId", deleteRule);

module.exports = router;