const express = require('express')
const postCreateCreditEntry = require('../controller/transactions/createInvoiceEntry')
const postCreateReceiptEntry = require('../controller/transactions/postCreateReceiptEntry')
const deleteTransaction = require('../controller/transactions/deleteTransaction')
const getTransactionByPartyId = require('../controller/transactions/getTransactionByPartyId')
const getInvoiceBasedSettlement = require('../controller/transactions/getInvoiceBasedSettlement')

const transRoutes = express.Router()

transRoutes
    .post('/createInvoiceEntry', postCreateCreditEntry)
    .post('/createReceiptEntry', postCreateReceiptEntry)
    .delete('/deleteTransaction/:clientId/:transactionId', deleteTransaction)
    .get('/transactionByPartyId/:clientId/:partyId/:fromDate/:toDate/:keyWord/:page/:perPage', getTransactionByPartyId)
    .get('/getInvoiceTransactions/:clientId/:invoiceId',(req,res,next)=>{ console.log('hai') ;next()} , getInvoiceBasedSettlement)

module.exports = transRoutes
