const { default: mongoose } = require("mongoose")
const { getClientDatabaseConnection } = require("../connection")
const transactionSchema = require("../transactions")


const fetchBillwiseOutStandingLEdger =async ({clientId,partyId})=>{
    try {
        


        const db =await getClientDatabaseConnection(clientId)
        const Transactions =await db.model('transaction',transactionSchema)    
        console.log(partyId,'am the party')     
        const result = await Transactions.aggregate([
            // Match transactions for the given party
            { 
              $match: { 
                partyId:  partyId  
              } 
            },
            
            { 
              $unwind: "$invoice" 
            },
            { 
              $group: {
                _id: "$invoice.invoiceId",
                totalCredit: { 
                  $sum: { 
                    $cond: [{ $eq: ["$type", "credit"] }, "$amount", 0] 
                  } 
                },
                totalDebit: { 
                  $sum: { 
                    $cond: [{ $eq: ["$type", "debit"] }, "$amount", 0] 
                  } 
                },
                // Optionally capture invoice details from the first occurrence in the group
                displayId: { $first: "$invoice.displayId" },
                dueDate: { $first: "$invoice.dueDate" }
              }
            },
            // Project the fields to format the output as desired
            { 
              $project: {
                _id: 0,
                invoiceId: "$_id",
                displayId: 1,
                totalAmount: "$totalCredit",
                balanceAmount: { $subtract: ["$totalCredit", "$totalDebit"] },
                dueDate: 1
              }
            }
          ] );

        
        return {status:true,statusCode:200,message:'Party summary listed ',data:result }
    } catch (error) {
        
    }
}

module.exports = fetchBillwiseOutStandingLEdger