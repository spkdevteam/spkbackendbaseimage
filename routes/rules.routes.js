const express = require("express");
const createRule = require("../controller/rules/createRule.controller");
const editRule = require("../controller/rules/editRule.controller");
const deleteRule = require("../controller/rules/deleteRule.controller");
const addUser = require("../middleware/user/addUser");
const getPaginatedRules = require("../controller/rules/getPaginatedRules.controller");
const getRuleById = require("../controller/rules/getRuleById.controller");

const router = express.Router();

router
.post("/createRule",addUser,  createRule)
.put("/editRule", addUser, editRule) 
.delete("/deleteRule/:ruleId/:clientId", addUser, deleteRule)
.get("/getPaginatedRules/:clientId", getPaginatedRules)
.get("/getRuleById/:ruleId/:clientId", getRuleById)
.use((req,res,next)=>{ console.log('reached main router    ') ;next()});

module.exports = router;