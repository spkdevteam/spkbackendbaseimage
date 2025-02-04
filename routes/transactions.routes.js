const express = require('express')
const postCreateCreditEntry = require('../controller/transactions/createInvoiceEntry')
const postCreateReceiptEntry = require('../controller/transactions/postCreateReceiptEntry')
const deleteTransaction = require('../controller/transactions/deleteTransaction')
const getTransactionByPartyId = require('../controller/transactions/getTransactionByPartyId')
const getInvoiceBasedSettlement = require('../controller/transactions/getInvoiceBasedSettlement')
const getPartyOutStanding = require('../controller/transactions/getPartyOutStanding')
const getAccountLedger = require('../controller/transactions/getAccountLedger')

const transRoutes = express.Router()

transRoutes
    .post('/addOrUpdateTransaction', postCreateReceiptEntry)
    .post('/createReceiptEntry', postCreateReceiptEntry)
    .delete('/deleteTransaction/:clientId/:transactionId', deleteTransaction)
    .get('/transactionByPartyId/:clientId/:partyId/:fromDate/:toDate/:keyWord/:page/:perPage', getTransactionByPartyId)
    .get('/getInvoiceTransactions/:clientId/:invoiceId', getInvoiceBasedSettlement)
    .get('/partyOutStanding/:partyId/:clientId',getPartyOutStanding)
    .get('/accountledger',getAccountLedger)

module.exports = transRoutes
