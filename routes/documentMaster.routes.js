const express = require("express")
const documentMasterCreate = require("../controller/documentMaster/documentMasterCreate.controller")
const documentMasterEdit = require("../controller/documentMaster/documentMasterEdit.controller")
const documentMasterDelete = require("../controller/documentMaster/documentMasterDelete.controller")
const {documentMasterGetAll, documentMasterGetById} = require("../controller/documentMaster/documentMasterGet.controller")

const router = express.Router()

router.post("/create", documentMasterCreate)
router.put("/edit", documentMasterEdit)
router.delete("/delete/:clientId/:id", documentMasterDelete)
router.get("/getAll/:clientId", documentMasterGetAll)
router.get("/getById/:clientId/:documentId", documentMasterGetById)

module.exports = router