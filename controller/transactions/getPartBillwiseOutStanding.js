const partyBillWiseSummary = require("../../model/transactions/partyBillWiseSummary")
const sanitizeBody = require("../../utils/sanitizeBody")

const getPartBillwiseOutStanding = async (req, res, next) => {
    try {
        const data = await sanitizeBody(req.params)
        console.log(data,'llll')
        const result =await partyBillWiseSummary({clientId:data.clientId ,partyId:data.partyId}) 
        
        
        
        res.json(result)
    } catch (error) {
       next(error)
    }
}

module.exports = getPartBillwiseOutStanding





// const result =await  (async function partyBillWiseSummary ({clientId ,partyId}){
//     console.log(clientId,partyId)

//     return {
//         status: true, message: 'data found ', data: {
//             invoiceId: 'IV00001',
//             payableDetails: [
//                 { total: 2500, discount: 500, net: 2000 }
//             ],
//             paidDetails: [
//                 { transactionId: 'tr00001', amount: 500, date: '02/05/2025', paymentMode: 'Cash' },
//                 { transactionId: 'tr00001', amount: 500, date: '03/05/2025', paymentMode: 'Cash' }
//             ]
//         }
//     }
// } )({clientId:data.clientId ,partyId:data.partyId})

