const express = require("express");
const createRole = require("../controller/role/createRole.controller");
const editRole = require("../controller/role/editRole.controller");
const deleteRole = require("../controller/role/deleteRole.controller");
const getPaginatedRoles = require("../controller/role/getPaginatedRoles.controller");
const assignPermission = require("../controller/role/assignPermission.controller");
const editPermission = require("../controller/role/editPermission.controller");
const deletePermission = require("../controller/role/deletePermission.controller");
const assignDocument = require("../controller/role/assignDocument.controller");
const editDocument = require("../controller/role/editDocument.controller");
const deleteDocument = require("../controller/role/deleteDocument.controller");
const getPermissionsByRoleId = require("../controller/role/getPermissionsByRoleId.controller");
const getDocumentsByRoleId = require("../controller/role/getDocumentsByRoleId.controller");
const getDocumentsByRole = require("../controller/role/getDocumentsByRole.controller");
const getByRoleId = require("../controller/role/getByRoleId.controller");
const getPermissionByRole = require("../controller/role/getPermissionByRole.controller");


const router = express.Router();

router
    .post("/createRole", createRole)
    .patch("/editRole", editRole)
    .delete("/deleteRole/:roleId/:companyId/:clientId", deleteRole)
    .get("/getPaginatedRoles/:companyId/:clientId", getPaginatedRoles)
    .post("/assignPermission", assignPermission)
    .patch("/editPermission", editPermission)
    .delete("/deletePermissions/:roleId/:companyId/:clientId", deletePermission)
    .post("/assignDocs", assignDocument)
    .patch("/editDocs", editDocument)
    .delete("/deleteDocs/:roleId/:companyId/:clientId", deleteDocument)
    .get("/getPermissionsByRoleId/:roleId/:compantId/:clientId", getPermissionsByRoleId)
    .get("/getPermissionByRole/:role/:companyId/:clientId", getPermissionByRole)
    .get("/getDocsByRoleId/:roleId/:companyId/:clientId", getDocumentsByRoleId)
    .get("/getDocsByRole/:role/:companyId/:clientId", getDocumentsByRole)
    .get("/getByRoleId/:roleId/:companyId/:clientId", getByRoleId)
    

module.exports = router;