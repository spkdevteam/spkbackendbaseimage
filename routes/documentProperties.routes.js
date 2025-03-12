const express = require("express")
const documentPropertiesCreate = require("../controller/doucumentProperty/documentProperty.controller")
const deleteDocumentProperties = require("../controller/doucumentProperty/deleteDocumentPorperties.controller")
const editDocumentProperties = require("../controller/doucumentProperty/editDocumentProperties.controller")
const {getAllDocumentProprties, getDocumentPropertiesById} = require("../controller/doucumentProperty/getDocumentProperties.controller")


const router = express.Router()

router.post("/create", documentPropertiesCreate)
router.delete("/delete/:clientId/:id", deleteDocumentProperties)
router.put("/edit", editDocumentProperties)
router.get("/getAll/:clientId",getAllDocumentProprties)
router.get("/getById/:clientId/:id", getDocumentPropertiesById)

module.exports = router