const express = require("express");
const createRulesAndPermission = require("../controller/rulesAndPermission/postCreateRulesAndPermission.controller");
const deleteRulesAndPermisson = require("../controller/rulesAndPermission/deleteRuleAndPermission.controller");
const getOneRulesAndPermissions = require("../controller/rulesAndPermission/getOneRuleAndPermission.controller");
const editOneRuleAndPermission = require("../controller/rulesAndPermission/editOneRuleAndPermission.controller");
const getRulesAndPermissionPaginated = require("../controller/rulesAndPermission/getRulesAndPermissionPaginated.controller");

const router = express.Router();


router
    .post("/createRulesAndPermission", createRulesAndPermission)
    .delete("/deleteRuleAndPermission/:id/:clientId", deleteRulesAndPermisson)
    .get("/getOneRuleAndPermission/:id/:clientId", getOneRulesAndPermissions)
    .get("/getRulesAndPermissionPaginated/:clientId", getRulesAndPermissionPaginated)
    .patch("/editOneRuleAndPermission", editOneRuleAndPermission)


module.exports = router;